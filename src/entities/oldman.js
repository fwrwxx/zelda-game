import oldmanLines from '../content/oldman-dialogue.js';
import { playAnimIfNotPlaying } from '../utils.js';
import { gameState, oldmanState, playerState } from '../state/state-manager.js';
import { dialog } from '../ui-components/dialog.js';

export function generateOldManComponents(k, pos) {
  return [
    k.sprite('assets', {
      anim: 'oldman-down',
    }),
    k.area({ shape: new k.Rect(k.vec2(2, 4), 12, 12) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    'oldman',
  ];
}

export async function startInteraction(k, oldman, player) {
  if (player.direction === 'left') {
    oldman.flipX = true;
    playAnimIfNotPlaying(oldman, 'oldman-side');
  }

  if (player.direction === 'right') {
    oldman.flipX = true;
    playAnimIfNotPlaying(oldman, 'oldman-side');
  }

  if (player.direction === 'down') {
    playAnimIfNotPlaying(oldman, 'oldman-side');
  }

  playerState.setIsSwordequipped(true);

  const responses = oldmanLines[gameState.getLocal()];

  if (gameState.getIsSonSaved()) {
    await dialog(k, k.vec2(250, 500), responses[3]);
    return;
  }

  let nbTalkedOldMan = oldmanState.getNbTalkedOldman();
  if (nbTalkedOldMan > responses.length - 2) {
    oldmanState.setNbTalkedOldMan(1);
    nbTalkedOldMan = oldmanState.getNbTalkedOldMan();
  }

  if (responses[nbTalkedOldMan]) {
    await dialog(k, k.vec2(250, 500), responses[nbTalkedOldMan]);
    oldmanState.setNbTalkedOldMan(nbTalkedOldMan + 1);

    return;
  }
}

export function endInteraction(oldman) {
  playAnimIfNotPlaying(oldman, 'oldman-down');
}
