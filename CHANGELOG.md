# Changelog

## [v2.0.0 (2024-09-10)](https://github.com/shiguww/brillante/releases/tag/v2.0.0)

### Added
- Support for `kdm_sound.bin`
- `kdm_mapdata.bin`: possibility of adding/deleting entries via previously unknown parameters

### Changed
- `kdm_mapdata.bin`: updated schema to version 4
- `kdm_link_data.bin`: updated schema to version 3
- `kdm_mapdata.bin`: renamed `section5.maps` to `mapDataTable`
- `kdm_link_data.bin`: renamed `section5.zones` to `linkDataAll`
- `kdm_link_data.bin`: moved `links`, `unknownG0`, `unknownG1` & `unknownG2` to `container`
- `kdm_mapdata.bin` / `kdm_link_data.bin`: removed `section4`, `unknownD2`, `unknownD3`, `unknownK1`, `unknownK2`, `unknownK3`, `unknownK4` as these are now set statically
- `kdm_mapdata.bin` / `kdm_link_data.bin`: removed `section0`, `section1`, `section2`, `unknownD0`, `unknownD1`, `unknownD4`, `unknownK0`, `unknownI0`, `unknownI1` & `unknownJ0` as these are now known

## [v1.0.0 (2024-09-02)](https://github.com/shiguww/brillante/releases/tag/v1.0.0)

### Added
- Support for `kdm_link_data.bin`

### Fixed
- `kdm_mapdata.bin`: fixed a console-only crash that occured because the wrong variable was written in section 7

### Changed
- `kdm_mapdata.bin`: `entries` was renamed to `maps` in section 5
- `kdm_mapdata.bin`: changed the type of `unknownG0` from number to string
- `kdm_mapdata.bin`: `unknownG13`, `unknownG14`, `unknownG15`, `unknownG16` became nullable

## [v0.0.0 (2024-09-01)](https://github.com/shiguww/brillante/releases/tag/v0.0.0)
