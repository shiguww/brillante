import KDM from "#/kdm/kdm";
import fs from "node:fs/promises";
import sha256 from "specs/utils/sha256";
import { test, expect, describe } from "vitest";

// CHN

describe("KDM (CHN)", () => {
  test("kdm_link_data.bin", async () => {
    const data = await fs.readFile(`data/CHN/Data/kdm_link_data.bin`);
    expect(sha256(data)).to.equal("77b8af839061cf8c8427709550f9a7f3760ed23b16a1ce5de101855492c83fa7");

    const parsed = new KDM().parse(data).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.equal("77b8af839061cf8c8427709550f9a7f3760ed23b16a1ce5de101855492c83fa7");
  });
});

// EUR

describe("KDM (EUR)", () => {
  test("kdm_link_data.bin", async () => {
    const data = await fs.readFile(`data/EUR/Data/kdm_link_data.bin`);
    expect(sha256(data)).to.equal("63a37db79a8fb013be8082747af58c83525efa591d6d0ca25a836462c2fb9574");

    const parsed = new KDM().parse(data).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.equal("63a37db79a8fb013be8082747af58c83525efa591d6d0ca25a836462c2fb9574");
  });
});

// JPN

describe("KDM (JPN)", () => {
  test("kdm_link_data.bin", async () => {
    const data = await fs.readFile(`data/JPN/Data/kdm_link_data.bin`);
    expect(sha256(data)).to.equal("40e3b96d165b16f7d1c04fb85586d781d90f832c669dc1df93ce23d8787c990c");

    const parsed = new KDM().parse(data).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.equal("40e3b96d165b16f7d1c04fb85586d781d90f832c669dc1df93ce23d8787c990c");
  });
});

// KOR

describe("KDM (KOR)", () => {
  test("kdm_link_data.bin", async () => {
    const data = await fs.readFile(`data/KOR/Data/kdm_link_data.bin`);
    expect(sha256(data)).to.equal("77b8af839061cf8c8427709550f9a7f3760ed23b16a1ce5de101855492c83fa7");

    const parsed = new KDM().parse(data).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.equal("77b8af839061cf8c8427709550f9a7f3760ed23b16a1ce5de101855492c83fa7");
  });
});

// USA

describe("KDM (USA)", () => {
  test("kdm_link_data.bin", async () => {
    const data = await fs.readFile(`data/USA/Data/kdm_link_data.bin`);
    expect(sha256(data)).to.equal("a2ea2342f26012781ee7394fc32c8713d22a2bede87aeb010f91865145104341");

    const parsed = new KDM().parse(data).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.equal("a2ea2342f26012781ee7394fc32c8713d22a2bede87aeb010f91865145104341");
  });
});
