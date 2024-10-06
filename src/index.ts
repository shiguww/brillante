import KDM from "#kdm/kdm";
import fs from "node:fs";

(() => {
  const kdm = new KDM();
  const buffer = fs.readFileSync("data/ORIG/kdm_mapdata.bin");

  fs.writeFileSync("data/out.json", JSON.stringify(kdm.parse(buffer).get(), undefined, 2));
})();

(() => {
  const kdm = new KDM();
  const data = JSON.parse(fs.readFileSync("data/out.json").toString());

  fs.writeFileSync("data/out.bin", kdm.set(data).build());
})();
