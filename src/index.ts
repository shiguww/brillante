import path from "node:path";
import fs from "node:fs/promises";
import { Command } from "commander";
import assert from "node:assert/strict";

import KDMSound from "#/kdm/kdm-sound";
import KDMMapData from "#/kdm/kdm-map-data";
import KDMLinkData from "#/kdm/kdm-link-data";

const program = new Command()
  .version("v0.0.0");

const kdm = program
  .command("kdm");

kdm
  .command("build")
  .requiredOption("-t, --type <TYPE>")
  .requiredOption("-i, --input <PATH>")
  .requiredOption("-o, --output <PATH>")
  .action(async (options) => {
    const type = options.type as string;
    const input = path.resolve(options.input);

    const output = path.resolve(options.output || input
      .replace(".kdm.json", ".bin")
      .replace(".json", ".bin"));

    let buffer: null | Buffer = null;

    const data = await fs.readFile(input, "utf8")
      .then((data) => JSON.parse(data));

    if (type === "map-data") {
      buffer = new KDMMapData(data)
        .build();
    }

    if (type === "link-data") {
      buffer = new KDMLinkData(data)
        .build();
    }

    assert(buffer !== null, `Unsupported KDM file type: '${type}'.`);

    await fs.writeFile(output, buffer);
    console.log(`Wrote to ${output}. Done.`);
  });

kdm
  .command("parse")
  .requiredOption("-t, --type <TYPE>")
  .requiredOption("-i, --input <PATH>")
  .requiredOption("-o, --output <PATH>")
  .action(async (options) => {
    const type = options.type as string;
    const input = path.resolve(options.input);
    const output = path.resolve(options.output || input.replace(".bin", ".kdm.json"));

    let data: null | object = null;
    const buffer = await fs.readFile(input);

    if (type === "sound") {
      data = new KDMSound()
        .parse(buffer);
    }

    if (type === "map-data") {
      data = new KDMMapData()
        .parse(buffer);
    }

    if (type === "link-data") {
      data = new KDMLinkData()
        .parse(buffer);
    }

    assert(data !== null, `Unsupported KDM file type: '${type}'.`);

    await fs.writeFile(output, JSON.stringify(data, undefined, 4));
    console.log(`Wrote to ${output}. Done.`);
  });

program.parse(process.argv);
