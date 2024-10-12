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

  describe("kdm_lucie.bin", () => {
    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile("data/Data/kdm_lucie.bin");
      expectSHA256Checksum(data, "kdm_lucie.bin", "53f0e139c364b12da549dc486ff8e2b7eeb5b5beca5fe861657551df5c9b4ae8");

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
    test.only("parsing and building yields the same file", async () => {
      const data = await fs.readFile("data/Data/kdm_mapdata.bin");
      expectSHA256Checksum(data, "kdm_mapdata.bin", "8936cbd3787ca041da921e76316259d5a9ad88c7dc737be423fe37c87ec6d700");

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expect(data).to.be.deep.equal(built);
    });
  });

  describe("kdm_pepalyze.bin", () => {
    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile("data/Data/kdm_pepalyze.bin");
      expectSHA256Checksum(data, "kdm_pepalyze.bin", "c88132e77aa5ba758f3196deea7447939afd3f81384add56b50db0d1d4e4feef");

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expect(data).to.be.deep.equal(built);
    });
  });

  describe("kdm_link_data.bin", () => {
    test.only("parsing and building yields the same file", async () => {
      const data = await fs.readFile("data/Data/kdm_link_data.bin");
      expectSHA256Checksum(data, "kdm_link_data.bin", "77b8af839061cf8c8427709550f9a7f3760ed23b16a1ce5de101855492c83fa7");

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expect(data).to.be.deep.equal(built);
    });
  });

  describe("kdm_worldmap_data.bin", () => {
    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile("data/Data/kdm_worldmap_data.bin");
      expectSHA256Checksum(data, "kdm_worldmap_data.bin", "d940cec28f223b03babd5e46446df0bd50dd75499764cfbd84e9e964f72c0ec3");

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expect(data).to.be.deep.equal(built);
    });
  });

  describe("kdm_pepalyze_museum.bin", () => {
    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile("data/Data/kdm_pepalyze_museum.bin");
      expectSHA256Checksum(data, "kdm_pepalyze_museum.bin", "5e3f77b4ed64e4446e32b3511939a2b4b525d4d0f7cc0bbb501fe01224c83fd1");

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expect(data).to.be.deep.equal(built);
    });
  });
});
