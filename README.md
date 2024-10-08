# `brillante` 🌟
**WIP**: Modding tools for `Paper Mario: Sticker Star`.

## Installation
First, begin by download the latest version of the tool [here](https://github.com/shiguww/brillante/releases) (or [here](https://github.com/shiguww/brillante/archive/refs/heads/develop.zip) for the `develop` branch).

You will also need node.js v22. The preferred installation method may vary depending on your OS.

Additionally, you need to install pnpm which can be done via corepack (bundled with node.js):
```shell
corepack enable
corepack use pnpm@9.12.0
```

If you're running into an "Operation Not Permitted" Error, run the shell as Administrator (Windows) or use `sudo` (Linux).

Finally, install the dependencies by running:
```shell
pnpm install
```

## Manipulating KDM files
The tool has four possible actions:
* `build` - Create a KDM binary file from a JSON export
* `parse` - Export a KDM binary file into an editable JSON format
* `inspect` - Export a KDM binary file into a verbose, readonly JSON format

Usage:

``` shell
pnpm brillante kdm-parse -i kdm_mapdata.bin # Exports to kdm_mapdata.kdm.json
pnpm brillante kdm-inspect -i kdm_mapdata.bin # Inspects to kdm_mapdata.kdm.json
pnpm brillante kdm-build -i kdm_mapdata.kdm.json -o file.bin # Builds to file.bin
```

**KDM file support table**
| File                      | Support |
| ------------------------- | ------- |
| `kdm_shop.bin`            | ✅       |
| `kdm_lucie.bin`           | ❌       |
| `kdm_sound.bin`           | ✅       |
| `kdm_battle.bin`          | ❌       |
| `kdm_sample.bin`          | ❌       |
| `kdm_switch.bin`          | ❌       |
| `kdm_mapdata.bin`         | ✅       |
| `kdm_texture.bin`         | ❌       |
| `kdm_pepalyze.bin`        | ❌       |
| `kdm_char_data.bin`       | ❌       |
| `kdm_item_data.bin`       | ❌       |
| `kdm_link_data.bin`       | ✅       |
| `kdm_mapobject.bin`       | ❌       |
| `kdm_sound_env.bin`       | ❌       |
| `kdm_battle_map.bin`      | ❌       |
| `kdm_map_viewer.bin`      | ❌       |
| `kdm_paper_data.bin`      | ❌       |
| `kdm_char_viewer.bin`     | ❌       |
| `kdm_dispos_data.bin`     | ❌       |
| `kdm_sound_anime.bin`     | ❌       |
| `kdm_battle_model.bin`    | ❌       |
| `kdm_battle_set_*.bin`    | ❌       |
| `kdm_battle_camera.bin`   | ❌       |
| `kdm_battle_common.bin`   | ❌       |
| `kdm_worldmap_data.bin`   | ❌       |
| `kdm_pepalyze_museum.bin` | ❌       |

* `✅`: fully supported, parsing and building loses no data
* `🧪`: fully supported, parsing and building loses unused data
* `🚧`: partially supported
* `❌`: not supported

## Running tests
To run the tests, create a `data` directory and copy a dump of the game's romFS in it. Then run `pnpm test`.

## Other tools
- [`kdm_battle_set_*.bin` editor (by Longboost)](https://github.com/Longboost/battle-set-exporter/releases)
- [`Lang/*.bin` & `NWTexture/*.bin` editor (by Darxoon)](https://github.com/Darxoon/nw-tex)
