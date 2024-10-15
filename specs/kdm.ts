import KDM from "#/kdm/kdm";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import { test, expect, describe } from "vitest";

function expectSHA256Checksum(data: Buffer, file: string, checksum: string): void {
  const sum = crypto.createHash("sha256")
    .update(data).digest("hex");

  expect(sum).to.be.equal(checksum, `Invalid ${file} checksum`);
}

describe("KDM", () => {
  describe("kdm_mapdata.bin", () => {
    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile("data/Data/kdm_mapdata.bin");
      expectSHA256Checksum(data, "kdm_mapdata.bin", "8936cbd3787ca041da921e76316259d5a9ad88c7dc737be423fe37c87ec6d700");

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expect(data).to.be.deep.equal(built);
    });
  });

  describe("kdm_lucie.bin", () => {
    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile("data/Data/kdm_lucie.bin");
      expectSHA256Checksum(data, "kdm_lucie.bin", "53f0e139c364b12da549dc486ff8e2b7eeb5b5beca5fe861657551df5c9b4ae8");

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expect(data).to.be.deep.equal(built);
    });
  });
});
