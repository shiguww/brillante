# `brillante` 🌟
**WIP**: Modding tools for `Paper Mario: Sticker Star`.

## Installation
Since v5.0.0, Brillante is distributed as a standalone executable which you can download [here](https://github.com/shiguww/brillante/releases).

### KDM files
```shell
brillante.exe kdm-parse -i kdm_mapdata.bin -o kdm_mapdata.json # Export kdm_mapdata.bin to kdm_mapdata.json
brillante.exe kdm-build -i kdm_mapdata.json -o kdm_mapdata.bin # Build kdm_mapdata.json to kdm_mapdata.bin
```

The following KDM files are supported:
- `kdm_shop.bin`
- `kdm_lucie.bin`
- `kdm_sound.bin`
- `kdm_switch.bin`
- `kdm_mapdata.bin`
- `kdm_texture.bin`
- `kdm_char_data.bin`
- `kdm_item_data.bin`
- `kdm_link_data.bin`
- `kdm_mapobject.bin`
- `kdm_sound_env.bin`
- `kdm_battle_map.bin`
- `kdm_dispos_data.bin`
- `kdm_sound_anime.bin`
- `kdm_battle_model.bin`
- `kdm_battle_camera.bin`
- `kdm_battle_common.bin`
- `kdm_worldmap_data.bin`
- `kdm_pepalyze.bin` / `kdm_pepalyze_museum.bin`

## Other tools
- [`kdm_battle_set_*.bin` editor (by Longboost)](https://github.com/Longboost/battle-set-exporter/releases)
- [`Lang/*.bin` & `NWTexture/*.bin` editor (by Darxoon)](https://github.com/Darxoon/nw-tex)

## Contributors
- [Darxoon](https://github.com/Darxoon): Research on the KDM file format
- [HunterXuman](https://x.com/HunterXuman): Naming of unknown fields in various KDM files
- [Longboost](https://github.com/Longboost): Research on `kdm_link_data.bin`, `kdm_dispos_data.bin`, section 3 and section 4 of KDM files
