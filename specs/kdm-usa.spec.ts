import fs from "node:fs";
import KDM from "#/kdm/kdm";
import sha256 from "./utils/sha256";
import { test, expect, describe } from "vitest";

describe("KDM (USA)", () => {
  const TITLE_ID = "00040000000A5E00";

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
    const checksum = "f2dab4fbab2a8f877d7c0e46afbd3862a3dfe22027e13d8c8af13a87a989c42d";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_sound.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_switch.bin", () => {
    const checksum = "fa19dfdb19a669067824994e7474b77eb256ca192359d5d8bdd186cf8f2b322e";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_switch.bin`);
 
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

  test("kdm_texture.bin", () => {
    const checksum = "6d3bc2683b608b5eea43cd6514581525a1364e98edee96ceacd2e9b537dace06";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_texture.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_pepalyze.bin", () => {
    const checksum = "ca5da7b7ea5185b9686b1c1e04a347a5b32505d68b7fbdb4cd6a28532a94ab08";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_pepalyze.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_char_data.bin", () => {
    const checksum = "a12fcf81a4e7b994fa39241b9cbb70f03f17123418a32add3cfd30b375efac9a";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_char_data.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_item_data.bin", () => {
    const checksum = "ce82a7d69994de220aae9424c7418745fc02f988616b67dec9827f84d01ac3e2";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_item_data.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_link_data.bin", () => {
    const checksum = "a2ea2342f26012781ee7394fc32c8713d22a2bede87aeb010f91865145104341";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_link_data.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_mapobject.bin", () => {
    const checksum = "6a86c2e366d936258ee6e0730c420296921a92f721571ec385c92863fc1a8dc5";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_mapobject.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_sound_env.bin", () => {
    const checksum = "fd5fdd28a51d74c25087253d63fad5203999092e0328b007b79737996f12e3b8";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_sound_env.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_battle_map.bin", () => {
    const checksum = "a7b9245a6b4beea581fe869f0118064d15de662bba1b85df54db9c2be5b3c530";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_battle_map.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_map_viewer.bin", () => {
    const checksum = "256259e741a6bda64819a41fa62a241906a3d078229e2d5f854125ab37c63aad";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_map_viewer.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_paper_data.bin", () => {
    const checksum = "19a9f19c975b67b09847e19479febd92763d5e99a880ae5349173b1baf1c91ff";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_paper_data.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_char_viewer.bin", () => {
    const checksum = "c4d3c266896da6ac1c54572c80f28f2e72a52fc748b16bdfeceb025e6ab82412";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_char_viewer.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_dispos_data.bin", () => {
    const checksum = "e532588ca4c51665434e6dbd25f42d3ff15e2c0ed051a742141818d8f1328a0f";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_dispos_data.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_sound_anime.bin", () => {
    const checksum = "9ad6da46aa6373df31d82696adb2e86da569e31f8a58ae36f4955213853f1248";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_sound_anime.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_battle_model.bin", () => {
    const checksum = "a28580ef632d97bf9b47bca88958ea1e80876a274ab469efa9fdaeb7e19eecc9";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_battle_model.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_battle_camera.bin", () => {
    const checksum = "a6406550b61f6631bd65135f02a83d19377e17becd8ae7d5d3af8cce21b37071";
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
    const checksum = "ae1eef977f01aefb30fe0290e34b1f40f5e28a8865edf81b996c39851189d15e";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_worldmap_data.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_pepalyze_museum.bin", () => {
    const checksum = "5b9319e80a0baecafb342c347906025e373f16eb79de6424ca0db63b0726b651";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_pepalyze_museum.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });
});
