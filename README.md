# `brillante` 🌟
**WIP**: Modding tools for `Paper Mario: Sticker Star`.

Supported files:
* `kdm_sound.bin` (`sound`)
* `kdm_mapdata.bin` (`map-data`)
* `kdm_link_data.bin` (`link-data`)

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

## Usage
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

Please refer to the list of supported files for a complete list of supported types.

Keep in mind that different versions of the tool might have different JSON exports and, as such, might not work with each other.
