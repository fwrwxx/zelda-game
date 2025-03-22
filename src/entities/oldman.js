import { playAnimIfNotPlaying } from '../utils.js';

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

export async function startIneraction(k, oldman, play) {
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
}
