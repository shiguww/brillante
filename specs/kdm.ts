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
  describe("kdm_shop.bin", () => {
    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile("data/Data/kdm_shop.bin");
      expectSHA256Checksum(data, "kdm_shop.bin", "f800563d0b182297ec469a94497c59cf08070c87f3ff7b6c3ad4eb0613a3f472");

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expect(data).to.be.deep.equal(built);
    });
  });

  describe("kdm_sound.bin", () => {
    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile("data/Data/kdm_sound.bin");
      expectSHA256Checksum(data, "kdm_sound.bin", "59adcc2c71b57ac0b9433a14b2757c5fe250e6c9c893fc3a4274f330ffe7a4eb");

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expect(data).to.be.deep.equal(built);
    });
  });

  describe("kdm_mapdata.bin", () => {
    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile("data/Data/kdm_mapdata.bin");
      expectSHA256Checksum(data, "kdm_mapdata.bin", "8936cbd3787ca041da921e76316259d5a9ad88c7dc737be423fe37c87ec6d700");

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expect(data).to.be.deep.equal(built);
    });
  });

  describe("kdm_link_data.bin", () => {
    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile("data/Data/kdm_link_data.bin");
      expectSHA256Checksum(data, "kdm_link_data.bin", "77b8af839061cf8c8427709550f9a7f3760ed23b16a1ce5de101855492c83fa7");

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expect(data).to.be.deep.equal(built);
    });
  });
});
