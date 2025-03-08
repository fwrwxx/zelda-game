import k from "./kaboomContext.js";
import world from "./scenes/world.js";

const scenes = {
  world,
};

for (const scene in scenes) {
  k.scene(scene, () => scenes[scene]());
};

k.go("world");
