import fs from "node:fs";
import KDM from "#/kdm/kdm";
import sha256 from "./utils/sha256";
import { test, expect, describe } from "vitest";

describe("KDM (KOR)", () => {
  const TITLE_ID = "00040000000C6800";

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
    const checksum = "59adcc2c71b57ac0b9433a14b2757c5fe250e6c9c893fc3a4274f330ffe7a4eb";
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
    const checksum = "c88132e77aa5ba758f3196deea7447939afd3f81384add56b50db0d1d4e4feef";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_pepalyze.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_link_data.bin", () => {
    const checksum = "77b8af839061cf8c8427709550f9a7f3760ed23b16a1ce5de101855492c83fa7";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_link_data.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_mapobject.bin", () => {
    const checksum = "47cdc8bbf8c8604fb02e589b58336e1f51b6f61e7f33a39b7d7ca4898380cd36";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_mapobject.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_sound_env.bin", () => {
    const checksum = "300b038b17c2f66c677ee3d407de18011a794fec31110fff8507aa73b8471019";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_sound_env.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_battle_map.bin", () => {
    const checksum = "e6934d02a8829e386c889ccfd12069383cba7120ec87e666731945bc4f67f40c";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_battle_map.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_dispos_data.bin", () => {
    const checksum = "d14e06a172ba53c7913b0debcd27cebd45e13d746106b307411110d93ae58be8";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_dispos_data.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_sound_anime.bin", () => {
    const checksum = "f0e147542ce30e46cbde36a511b20857bbfed39bee63f1b71a2a7c6b16b77bc4";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_sound_anime.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_battle_model.bin", () => {
    const checksum = "bf42cf442440afcc8f8ab8e93340aed4fe1ad663885f799b67280473b165f8d0";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_battle_model.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_battle_camera.bin", () => {
    const checksum = "a5f4a8aee72b1f0bf9d168b27c97379854f377d4d9ef2d759086f0e70e5fa9df";
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
    const checksum = "d940cec28f223b03babd5e46446df0bd50dd75499764cfbd84e9e964f72c0ec3";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_worldmap_data.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });

  test("kdm_pepalyze_museum.bin", () => {
    const checksum = "5e3f77b4ed64e4446e32b3511939a2b4b525d4d0f7cc0bbb501fe01224c83fd1";
    const file = fs.readFileSync(`${TITLE_ID}/Data/kdm_pepalyze_museum.bin`);
 
    expect(sha256(file)).to.be.equal(checksum);

    const parsed = new KDM().parse(file).get();
    const built = new KDM().set(parsed).build();

    expect(sha256(built)).to.be.equal(checksum);
  });
});
