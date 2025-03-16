export function generateSlimeComponents(k, pos) {
  return [
    k.sprite("assets", {
      anims: "slime-idle-down",
    }),
    k.sprite({shape: new k.Rect(k.vec2(0, 6), 16, 10)}),
    k.body(),
    k.pos(pos),
    k.offscreen(),
    k.opacity(),
    {
      speed: 100,
      attackPower: 0.5,
    },
    "slime",
  ];
}
