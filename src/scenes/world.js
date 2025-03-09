import { colorizeBackground, drawTiles, fetchMapData } from "../utils.js";

export default async function world(k) {
  colorizeBackground(k, 76, 170, 255);
  const mapData = await fetchMapData("./assets/maps/world.json");
  console.log(mapData);

  const map = k.add([k.pos(0, 0)]);

  const entities = {
    player: null,
    slimes: [],
  };

  const layers = mapData.layers;
  for (const layer of layers) {
    if (layer.name === "boundaries") {
      continue;
    }

    if (layer.name === "spawn-points") {
      continue;
    }

    drawTiles(k, map, layer, mapData.tileheight, mapData.tilewidth);
  }
}
