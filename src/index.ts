import KDM from "#/kdm/kdm";
import path from "node:path";
import fs from "node:fs/promises";
import { Command } from "commander";

const program = new Command()
  .version("v5.1.1")
  .option("-v, --verbose");

program
  .command("kdm-build")
  .option("-o, --output <PATH>")
  .requiredOption("-i, --input <PATH>")
  .action(async (options) => {
    const input = path.resolve(options.input);

    const output = path.resolve(options.output || input
      .replace(".kdm.json", ".bin")
      .replace(".json", ".bin"));

    const data = await fs.readFile(input, "utf8")
      .then((data) => JSON.parse(data));

    await fs.writeFile(output, new KDM().set(data).build());
    console.log(`Wrote to ${output}. Done.`);
  });

program
  .command("kdm-parse")
  .option("-o, --output <PATH>")
  .requiredOption("-i, --input <PATH>")
  .action(async (options) => {
    const input = path.resolve(options.input);
    const output = path.resolve(options.output || input.replace(".bin", ".kdm.json"));

    const buffer = await fs.readFile(input);

    await fs.writeFile(output, JSON.stringify(
      new KDM().parse(buffer).get(), undefined, 2));

    console.log(`Wrote to ${output}. Done.`);
  });

program
  .command("kdm-inspect")
  .option("-o, --output <PATH>")
  .requiredOption("-i, --input <PATH>")
  .action(async (options) => {
    const input = path.resolve(options.input);
    const output = path.resolve(options.output || input.replace(".bin", ".kdm.json"));

    const buffer = await fs.readFile(input);

    await fs.writeFile(output, JSON.stringify(
      new KDM().parse(buffer), undefined, 2));

    console.log(`Wrote to ${output}. Done.`);
  });

program.parse(process.argv);
