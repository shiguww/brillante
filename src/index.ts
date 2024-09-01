import path from "node:path";
import fs from "node:fs/promises";
import { Command } from "commander";
import assert from "node:assert/strict";

import KDMMapDataParser from "#/kdm/parsers/kdm-map-data";
import KDMMapDataBuilder from "#/kdm/builders/kdm-map-data";
import KDMLinkDataParser from "#/kdm/parsers/kdm-link-data";
import KDMLinkDataBuilder from "#/kdm/builders/kdm-link-data";

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
      buffer = new KDMMapDataBuilder()
        .import(data)
        .build();
    }

    if (type === "link-data") {
      buffer = new KDMLinkDataBuilder()
        .import(data)
        .build();
    }

    assert(buffer !== null, `Unsupported KDM file type: '${type}'.`);

    await fs.writeFile(output, buffer);
    console.log(`Wrote to ${output}.`);
    console.log(`Done.`);
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

    if (type === "map-data") {
      data = new KDMMapDataParser()
        .parse(buffer)
        .export();
    }

    if (type === "link-data") {
      data = new KDMLinkDataParser()
        .parse(buffer)
        .export();
    }

    assert(data !== null, `Unsupported KDM file type: '${type}'.`);

    await fs.writeFile(output, JSON.stringify(data, undefined, 4));
    console.log(`Wrote to ${output}.`);
    console.log(`Done.`);
  });

kdm
  .command("inspect")
  .requiredOption("-t, --type <TYPE>")
  .requiredOption("-i, --input <PATH>")
  .requiredOption("-o, --output <PATH>")
  .action(async (options) => {
    const type = options.type as string;
    const input = path.resolve(options.input);
    const output = path.resolve(options.output || input.replace(".bin", ".kdm.json"));

    let data: null | object = null;
    const buffer = await fs.readFile(input);

    if (type === "map-data") {
      data = new KDMMapDataParser()
        .parse(buffer)
        .inspect();
    }

    if (type === "link-data") {
      data = new KDMLinkDataParser()
        .parse(buffer)
        .inspect();
    }

    assert(data !== null, `Unsupported KDM file type: '${type}'.`);

    await fs.writeFile(output, JSON.stringify(data, undefined, 4));
    console.log(`Wrote to ${output}.`);
    console.log(`Done.`);
  });

program.parse(process.argv);
