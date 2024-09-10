# `brillante` 🌟
**WIP**: Modding tools for `Paper Mario: Sticker Star`.

## Installation
First, begin by download the latest version of the tool [here](https://github.com/shiguww/brillante/releases) (or [here](https://github.com/shiguww/brillante/archive/refs/heads/develop.zip) for the `develop` branch).

You will also need node.js v22. The preferred installation method may vary depending on your OS.

Additionally, you need to install pnpm which can be done via corepack (bundled with node.js):
```shell
corepack enable
corepack use pnpm@9.9.0
```

If you're running into an "Operation Not Permitted Error", run the shell as Administrator (Windows) or use `sudo` (Linux).

Finally, install the dependencies by running:
```shell
pnpm install
```

## Editing KDM files
Below is the list of KDM files.

Files starting with `kdm_battle_set` are not listed because these can already be edited using Longboost's battle set exporter, which you can get [here](https://github.com/Longboost/battle-set-exporter). Additionally, `kdm_sample.bin` is also not listed as it is believed to be a test file for the KDM parser.

| File                      | Support | Type              |
| ------------------------- | ------- | ----------------- |
| `kdm_shop.bin`            | No      | `shop`            |
| `kdm_lucie.bin`           | No      | `lucie`           |
| `kdm_sound.bin`           | Full    | `sound`           |
| `kdm_battle.bin`          | No      | `battle`          |
| `kdm_switch.bin`          | No      | `switch`          |
| `kdm_mapdata.bin`         | Full    | `map-data`        |
| `kdm_texture.bin`         | No      | `texture`         |
| `kdm_pepalyze.bin`        | No      | `pepalyze`        |
| `kdm_char_data.bin`       | No      | `char-data`       |
| `kdm_item_data.bin`       | No      | `item-data`       |
| `kdm_link_data.bin`       | Full    | `link-data`       |
| `kdm_mapobject.bin`       | No      | `map-object`      |
| `kdm_sound_env.bin`       | No      | `sound-env`       |
| `kdm_battle_map.bin`      | No      | `battle-map`      |
| `kdm_map_viewer.bin`      | No      | `map-viewer`      |
| `kdm_paper_data.bin`      | No      | `paper-data`      |
| `kdm_char_viewer.bin`     | No      | `char-viewer`     |
| `kdm_dispos_data.bin`     | No      | `dispos-data`     |
| `kdm_sound_anime.bin`     | No      | `sound-anime`     |
| `kdm_battle_model.bin`    | No      | `battle-model`    |
| `kdm_battle_camera.bin`   | No      | `battle-camera`   |
| `kdm_battle_common.bin`   | No      | `battle-common`   |
| `kdm_worldmap_data.bin`   | No      | `world-map-data`  |
| `kdm_pepalyze_museum.bin` | No      | `pepalyze-museum` |

The tool has two possible actions:
* `build` - Build back a file from a JSON export.
* `parse` - Export a file to a editable/readable JSON format.
  
For example, to export `kdm_mapdata.bin` to `kdm_mapdata.json`, you'd run:
```shell
pnpm brillante kdm parse -t map-data -i kdm_mapdata.bin -o kdm_mapdata.json
```

After editing `kdm_mapdata.json`, you can build a `kdm_mapdata.bin` file which can be loaded into the game:
```shell
pnpm brillante kdm build -t map-data -i kdm_mapdata.json -o kdm_mapdata.bin
```
