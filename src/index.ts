import fs from "node:fs";
import KDM from "#/kdm/kdm";

(() => {
  const kdm = new KDM();
  const buffer = fs.readFileSync("data/ORIG/kdm_sound.bin");

  console.log("parsing");
  fs.writeFileSync("data/out.json", JSON.stringify(kdm.parse(buffer).get(), undefined, 2));
})();

(() => {
  const kdm = new KDM();
  const data = JSON.parse(fs.readFileSync("data/out.json").toString());

  console.log("building");
  fs.writeFileSync("data/out.bin", kdm.set(data).build());
})();
