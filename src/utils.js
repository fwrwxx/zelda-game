export function colorizeBackground(k, r, g, b){
  k.add([
    k.rect(k.canvas.width, k.canvas.heght),
    k.color(r, g, b),
    k.fixed(),
  ]);
}

export async function fatchMapData(mapPath) {
  return await (await fetch(mapPath)).json();
}

export function drawTiles(k, map, layer, tileheight, tilewidth) {
  let numOfDrawnTiles = 0;
  const tilePos = k.vec2();
}
