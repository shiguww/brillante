# Changelog

## [v6.0.0 (2024-10-23)](https//github.com/shiguww/brillante/releases/tag/v6.0.0)

### Added
- KDM: Added support for `kdm_switch.bin`
- KDM: Added support for `kdm_texture.bin`
- KDM: Added support for `kdm_char_data.bin`
- KDM: Added support for `kdm_item_data.bin`
- KDM: Added support for `kdm_paper_data.bin`

### Changed
- KDM: Changed the types `u8`, `u16` and `u32` to their signed counterparts

## [v5.2.0 (2024-10-22)](https//github.com/shiguww/brillante/releases/tag/v5.2.0)

### Added
- KDM: Added support for `kdm_sound_env.bin`
- KDM: Added support for `kdm_battle_map.bin`
- KDM: Added support for `kdm_sound_anime.bin`
- KDM: Added support for `kdm_battle_common.bin`
- KDM: Added support for `kdm_battle_camera.bin`

## [v5.1.1 (2024-10-19)](https//github.com/shiguww/brillante/releases/tag/v5.1.1)

### Fixed
- KDM (`kdm_link_data.bin`): Fixed a mistake in the order of the fields of the `Link` type

## [v5.1.0 (2024-10-19)](https//github.com/shiguww/brillante/releases/tag/v5.1.0)

### Added
- KDM: Added support for `kdm_battle_model.bin`

## [v5.0.0 (2024-10-19)](https//github.com/shiguww/brillante/releases/tag/v4.0.0)

### Fixed
- KDM: Fixed a crash caused by regional differences in some KDM files

### Removed
- KDM: Removed the `MuseumLockData`, `MuseumSecretData` and `MuseumSecretSealData` types as these are exactly the same as their normal counterparts

## [v4.0.0 (2024-10-17)](https//github.com/shiguww/brillante/releases/tag/v4.0.0)

### Added
- KDM: Added support for `kdm_mapobject.bin`
- KDM: Added support for `kdm_dispos_data.bin`
- KDM: Added support for `kdm_worldmap_data.bin`

### Changed
- KDM: renamed `_structure` to `_kind`
- KDM: complete rewrite of the export format to allow aliasing

## [v3.0.0 (2024-10-09)](https//github.com/shiguww/brillante/releases/tag/v3.0.0)

### Added
- KDM: Added support for `kdm_shop.bin`
- KDM: Added support for `kdm_lucie.bin`
- KDM: Added support for `kdm_pepalyze.bin`
- KDM: Added support for `kdm_pepalyze_museum.bin`

### Fixed
- KDM (`kdm_sound.bin`): fixed a section 4 assertion parsing error

### Changed
- CLI: specifiying an output file path is now optional
- CLI: specifying the type of KDM file is now not required
- KDM (`kdm_sound.bin`): changed `unknownD1` and `unknownD2` to arrays
- KDM: empty strings are now serialized as `null` instead of `""`
- KDM (`kdm_link_data.bin`): removed `container`, the `links` array now exists on its own
- KDM: parsing and building with no modifications will now output the same file, when possible
- KDM (`kdm_sound.bin`): added possibility of adding/deleting entries via previously unknown parameters
- KDM (`kdm_link_data.bin`): added possibility of adding/deleting entries via previously unknown parameters
- KDM (`kdm_mapdata.bin`): change `unknownG1`, `unknownG7`, `unknownG8`, `unknownG9` &`unknownG12` to strings
- KDM (`kdm_mapdata.bin`): removed `unknownG13`, `unknownG14`, `unknownG15` & `unknownG16` as these are now known to be part of the array header
- KDM (`kdm_link_data.bin`): removed `unknownF0`, `unknownF1`, `unknownF2`, `unknownG0`, `unknownG1`, `unknownG2`, `unknownH3`, `unknownH4` & `unknownH5` as these are now known to be part of the array header
- KDM (`kdm_sound.bin`): removed `unknownA7`, `unknownA8`, `unknownA9`, `unknownA10`, `unknownB18`, `unknownB19`, `unknownB20`, `unknownB21`, `unknownC16`, `unknownC17`, `unknownC18`, `unknownC19`, `unknownD15`, `unknownD16`, `unknownD17`, `unknownD18`, `unknownH4`, `unknownH5`, `unknownH6`, `unknownH7`, `unknownK57`, `unknownK58`, `unknownK59`, `unknownK60`, `unknownM9`, `unknownM10`, `unknownM11`, `unknownM12`, `unknownP3`, `unknownP4`, `unknownP5` & `unknownP6` as these are now known to be part of the array header

## [v2.0.0 (2024-09-10)](https://github.com/shiguww/brillante/releases/tag/v2.0.0)

### Added
- KDM: Added support for `kdm_sound.bin`
- KDM (`kdm_mapdata.bin`): added possibility of adding/deleting entries via previously unknown parameters

### Changed
- KDM (`kdm_mapdata.bin`): updated schema to version 4
- KDM (`kdm_link_data.bin`): updated schema to version 3
- KDM (`kdm_mapdata.bin`): renamed `section5.maps` to `mapDataTable`
- KDM (`kdm_link_data.bin`): renamed `section5.zones` to `linkDataAll`
- KDM (`kdm_link_data.bin`): moved `links`, `unknownG0`, `unknownG1` & `unknownG2` to `container`
- KDM (`kdm_mapdata.bin` / `kdm_link_data.bin`): removed `section4`, `unknownD2`, `unknownD3`, `unknownK1`, `unknownK2`, `unknownK3`, `unknownK4` as these are now set statically
- KDM (`kdm_mapdata.bin` / `kdm_link_data.bin`): removed `section0`, `section1`, `section2`, `unknownD0`, `unknownD1`, `unknownD4`, `unknownK0`, `unknownI0`, `unknownI1` & `unknownJ0` as these are now known

## [v1.0.0 (2024-09-02)](https://github.com/shiguww/brillante/releases/tag/v1.0.0)

### Added
- Added support for `kdm_link_data.bin`

### Fixed
- KDM (`kdm_mapdata.bin`): fixed a console-only crash that occured because the wrong variable was written in section 7

### Changed
- KDM (`kdm_mapdata.bin`): `entries` was renamed to `maps` in section 5
- KDM (`kdm_mapdata.bin`): changed the type of `unknownG0` from number to string
- KDM (`kdm_mapdata.bin`): `unknownG13`, `unknownG14`, `unknownG15`, `unknownG16` became nullable

## [v0.0.0 (2024-09-01)](https://github.com/shiguww/brillante/releases/tag/v0.0.0)
