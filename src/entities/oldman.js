import oldmanLines from '../content/oldmanDialogue.js';
import { playAnimIfNotPlaying } from '../utils.js';
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

  const responses = oldmanLines.english;

  dialog(k, k.vec2(250, 500), responses[0]);
}
