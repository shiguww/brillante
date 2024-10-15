import fs from "node:fs";
import KDM from "#/kdm/kdm";

const buffer = fs.readFileSync("data/Data/kdm_mapdata.bin");
const kdm = new KDM().parse(buffer);

fs.writeFileSync("data/out.json", JSON.stringify(kdm.get(), undefined, 2));
