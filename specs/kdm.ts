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
    const FILE = "Data/kdm_mapdata.bin";
    const CHECKSUM = "8936cbd3787ca041da921e76316259d5a9ad88c7dc737be423fe37c87ec6d700";

    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile(`data/${FILE}`);
      expectSHA256Checksum(data, FILE, CHECKSUM);

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expectSHA256Checksum(built, `${FILE} (rebuilt)`, CHECKSUM);
    });
  });

  describe("kdm_lucie.bin", () => {
    const FILE = "Data/kdm_lucie.bin";
    const CHECKSUM = "53f0e139c364b12da549dc486ff8e2b7eeb5b5beca5fe861657551df5c9b4ae8";

    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile(`data/${FILE}`);
      expectSHA256Checksum(data, FILE, CHECKSUM);

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expectSHA256Checksum(built, `${FILE} (rebuilt)`, CHECKSUM);
    });
  });

  describe("kdm_shop.bin", () => {
    const FILE = "Data/kdm_shop.bin";
    const CHECKSUM = "f800563d0b182297ec469a94497c59cf08070c87f3ff7b6c3ad4eb0613a3f472";

    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile(`data/${FILE}`);
      expectSHA256Checksum(data, FILE, CHECKSUM);

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expectSHA256Checksum(built, `${FILE} (rebuilt)`, CHECKSUM);
    });
  });

  describe("kdm_link_data.bin", () => {
    const FILE = "Data/kdm_link_data.bin";
    const CHECKSUM = "77b8af839061cf8c8427709550f9a7f3760ed23b16a1ce5de101855492c83fa7";

    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile(`data/${FILE}`);
      expectSHA256Checksum(data, FILE, CHECKSUM);

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expectSHA256Checksum(built, `${FILE} (rebuilt)`, CHECKSUM);
    });
  });

  describe("kdm_worldmap_data.bin", () => {
    const FILE = "Data/kdm_worldmap_data.bin";
    const CHECKSUM = "d940cec28f223b03babd5e46446df0bd50dd75499764cfbd84e9e964f72c0ec3";

    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile(`data/${FILE}`);
      expectSHA256Checksum(data, FILE, CHECKSUM);

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expectSHA256Checksum(built, `${FILE} (rebuilt)`, CHECKSUM);
    });
  });

  describe("kdm_pepalyze.bin", () => {
    const FILE = "Data/kdm_pepalyze.bin";
    const CHECKSUM = "c88132e77aa5ba758f3196deea7447939afd3f81384add56b50db0d1d4e4feef";

    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile(`data/${FILE}`);
      expectSHA256Checksum(data, FILE, CHECKSUM);

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expectSHA256Checksum(built, `${FILE} (rebuilt)`, CHECKSUM);
    });
  });

  describe("kdm_pepalyze_museum.bin", () => {
    const FILE = "Data/kdm_pepalyze_museum.bin";
    const CHECKSUM = "5e3f77b4ed64e4446e32b3511939a2b4b525d4d0f7cc0bbb501fe01224c83fd1";

    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile(`data/${FILE}`);
      expectSHA256Checksum(data, FILE, CHECKSUM);

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expectSHA256Checksum(built, `${FILE} (rebuilt)`, CHECKSUM);
    });
  });

  describe("kdm_sound.bin", () => {
    const FILE = "Data/kdm_sound.bin";
    const CHECKSUM = "59adcc2c71b57ac0b9433a14b2757c5fe250e6c9c893fc3a4274f330ffe7a4eb";

    test("parsing and building yields the same file", async () => {
      const data = await fs.readFile(`data/${FILE}`);
      expectSHA256Checksum(data, FILE, CHECKSUM);

      const parsed = new KDM().parse(data).get();
      const built = new KDM().set(parsed).build();

      expectSHA256Checksum(built, `${FILE} (rebuilt)`, CHECKSUM);
    });
  });
});
