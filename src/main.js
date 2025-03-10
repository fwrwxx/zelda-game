import k from "./kaboomContext.js";
import world from "./scenes/world.js";

k.loadSprite("assets", "./assets/topdownasset.png", {
  sliceX: 39,
  sliceY: 31,
});

const scenes = {
  world,
};

for (const scene in scenes) {
  k.scene(scene, () => scenes[scene](k));
};

k.go("world");
