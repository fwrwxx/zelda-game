export function colorizeBackground(k, r, g, b){
  k.add([
    k.rect(k.canvas.width, k.canvas.height),
    k.color(r, g, b),
    k.fixed(),
  ]);
}

export async function fetchMapData(mapPath) {
  return await (await fetch(mapPath)).json();
}

export function drawTiles(k, map, layer, tileheight, tilewidth) {
  let numOfDrawnTiles = 0;
  const tilePos = k.vec2(0, 0);

  for (const tile of layer.data) {
    if (numOfDrawnTiles % layer.width === 0) {
      tilePos.x = 0;
      tilePos.y += tileheight;
    } else {
      tilePos.x += tilewidth;
    }

    numOfDrawnTiles++;
    if (tile === 0) continue;

    map.add([
      k.sprite("assets", { frame: tile - 1 }),
      k.pos(tilePos),
      k.offscreen(),
    ]);
  }
}
