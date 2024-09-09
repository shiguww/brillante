import fs from "node:fs/promises";

type T = Array<[number, string]>;

/*
Set(3) { 'GROUP_BATTLE', 'GROUP_SFX_EVT1', 'GROUP_SFX_EVT2' }
*/

(async () => {
  const mine = await fs.readFile("data/MY_STRINGS.json")
    .then((buf) => JSON.parse(buf.toString())) as T;

  const orig = await fs.readFile("data/ORIG_STRINGS.json")
    .then((buf) => JSON.parse(buf.toString())) as T;

  console.log(
    orig.find((s) => s[1] === "GROUP_SFX_EVT2")
  )

  /*
  const mine = await fs.readFile("data/MY_STRINGS.json")
    .then((buf) => JSON.parse(buf.toString()) as T)
    .then((data) => new Set(data.map((s) => s[1])));

  const orig = await fs.readFile("data/ORIG_STRINGS.json")
    .then((buf) => JSON.parse(buf.toString()) as T)
    .then((data) => new Set(data.map((s) => s[1])));

  const difference = new Set([...orig].filter((value) => !mine.has(value)));
  console.log(difference);*/
})();
