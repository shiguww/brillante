import fs from "node:fs";
import KDM from "#/kdm/kdm";

const buffer = fs.readFileSync("data/Data/kdm_mapdata.bin");
const kdm = new KDM().parse(buffer);

console.log(kdm.parameters.map((p) => p.get()));
