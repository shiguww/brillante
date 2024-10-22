import fs from "node:fs";
import KDM from "#/kdm/kdm";
import sha256 from "./utils/sha256";
import { test, expect, describe } from "vitest";

describe("KDM (EUR)", () => {
  const TITLE_ID = "00040000000A5F00";

  test("kdm_shop.bin", () => {
    const checksum = "f800563d0b182297ec469a94497c59cf08070c87f3ff7b6c3ad4eb0613a3f472";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_shop.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_lucie.bin", () => {
    const checksum = "53f0e139c364b12da549dc486ff8e2b7eeb5b5beca5fe861657551df5c9b4ae8";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_lucie.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_sound.bin", () => {
    const checksum = "0afd68c6cdccabe7a9f572eb387e17797be207b44ca3e0bccbac98544fe7dec3";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_sound.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_mapdata.bin", () => {
    const checksum = "8936cbd3787ca041da921e76316259d5a9ad88c7dc737be423fe37c87ec6d700";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_mapdata.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_pepalyze.bin", () => {
    const checksum = "49ac54933e2b72eb34f0fc8cc8afef0bd322b7e055cb34f4b6929b651515c346";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_pepalyze.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_link_data.bin", () => {
    const checksum = "63a37db79a8fb013be8082747af58c83525efa591d6d0ca25a836462c2fb9574";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_link_data.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_mapobject.bin", () => {
    const checksum = "704907abba71005ebff8c4a53f44d78695eb3c0a0f8960f39ca69eed22b38cb5";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_mapobject.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_dispos_data.bin", () => {
    const checksum = "07e25f1d0d730730cec46cd41b565e9bc82b8cdb17bf2ee7daf7c7e5516d33fd";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_dispos_data.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_sound_anime.bin", () => {
    const checksum = "095e84ca57b4901500f9b9a2bb17afbd9f5425102be5c0ec6615c00a8bed4dc1";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_sound_anime.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_battle_model.bin", () => {
    const checksum = "0c78986b908db13d5d9cad16b8777d185eedbf03bdd1a29409dc7ca260e7acee";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_battle_model.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_battle_camera.bin", () => {
    const checksum = "8cc582e25187fb4f7fd48892b5b2ae91f5a71dfb309cba0ad49aad609908e07e";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_battle_camera.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_battle_common.bin", () => {
    const checksum = "c6907bbcafdc59cc58682ee86f9db71a19365df0f5d24dc301365dd423f5a849";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_battle_common.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_worldmap_data.bin", () => {
    const checksum = "2c9ce3e5aa841b77a499397e03cada69021f9f85eaaa15b25ffdec737048ca88";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_worldmap_data.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_pepalyze_museum.bin", () => {
    const checksum = "b442cc5235f09a555a4ca30e7fcc29283b0d016971ddc62c9801cf0ab43d721f";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_pepalyze_museum.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });
});
