# Changelog

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
