import { Color } from "three";

export const paletteList = ["black", "pink", "aquamarine", "blue", "darkblue", "grey", "white", "orange"]

export const palettes = {
  black: {
    "index": 0,
    "accentPalette": "black",
    "id": "black",
    "BG": "#100f10",
    "BGLight": "#2a282a",
    "text": "#b9bec2",
    "highlightHover": "#cccccc",
    "inactive": "#6d6d6d",
    "highlight": "#ffffff"
  },
  pink: {
    "index": 1,
    "accentPalette": "black",
    "id": "pink",
    "text": "#f0dede",
    "inactive": "#e39393",
    "BG": "#db7676",
    "highlightHover": "#f3c6c6",
    "BGLight": "#d55f5f",
    "highlight": "#ffffff"
  },
  aquamarine: {
    "index": 2,
    "accentPalette": "black",
    "id": "aquamarine",
    "BGLight": "#66a2a5",
    "text": "#e0f1f1",
    "highlightHover": "#b5d6d8",
    "inactive": "#56979b",
    "BG": "#7fb9bc",
    "highlight": "#ffffff"
  },
  blue: {
    "index": 3,
    "accentPalette": "black",
    "id": "blue",
    "BG": "#5963fa",
    "BGLight": "#424bd3",
    "highlight": "#f6f6f4",
    "text": "#d2daf3",
    "highlightHover": "#c1c3e9",
    "inactive": "#7b82e7"
  },
  darkblue:{
    "index": 4,
    "accentPalette": "black",
    "id": "darkblue",
    "BGLight": "#2c4570",
    "BG": "#446091",
    "text": "#a4b8db",
    "highlightHover": "#9fbae9",
    "highlight": "#e7e6e4",
    "inactive": "#6580ad"
  },
  grey: {
    "index": 5,
    "accentPalette": "white",
    "id": "grey",
    "inactive": "#7c8598",
    "BG": "#ebebeb",
    "BGLight": "#bcc2c9",
    "highlight": "#122438",
    "text": "#2a3e53",
    "highlightHover": "#3c526a"
  },
  white: {
    "index": 6,
    "accentPalette": "white",
    "id": "white",
    "BG": "#ffffff",
    "BGLight": "#dfdfdf",
    "text": "#3d3d3d",
    "highlightHover": "#333333",
    "inactive": "#8d8d8d",
    "highlight": "#000000"
  },
  orange: {
    "index": 7,
    "accentPalette": "black",
    "id": "orange",
    "BG": "#f5e1ce",
    "BGLight": "#f1d7c0",
    "highlight": "#f04924",
    "text": "#ff7657",
    "highlightHover": "#fd6e4e",
    "inactive": "#ebaf92"
  }
}


export const sinPalettes = {
  black: {
    c0: new Color(0x404040),
    c1: new Color(0xcef316),
    c2: new Color(0x815903),
    c3: new Color(0xae00ff),
  },
  pink: {
    c0: new Color(0x949494),
    c1: new Color(0x9ccd32),
    c2: new Color(0x835a01),
    c3: new Color(0x7b6f80),
  },
  aquamarine: {
    c0: new Color(0x7df96c),
    c1: new Color(0xaccd32),
    c2: new Color(0x8f7338),
    c3: new Color(0xf52ee5),
  },
  blue: {
    c0: new Color(0.8 , 0.95, 0.4),
    c1: new Color(0.5 , 0.5, 0.35),
    c2: new Color(0.1 , 0.5, 0.4),
    c3: new Color(0   , 0, 0.85),
  },
  darkblue: {
    c0: new Color(0xd8e3ba),
    c1: new Color(0x7f7f59),
    c2: new Color(0x197f66),
    c3: new Color(0x090953),
  },
  grey: {
    c0: new Color(0x878787),
    c1: new Color(0x83a59a),
    c2: new Color(0xebebeb),
    c3: new Color(0x00d6bd),
  },
  white: {
    c0: new Color(0x878787),
    c1: new Color(0x707070),
    c2: new Color(0xffffff),
    c3: new Color(0x4b7d95),
  },
  orange: {
    c0: new Color(0.5, 0.5, 0.5),
    c1: new Color(0.5, 0.5, 0.5),
    c2: new Color(0.5, 0.5, 0.5),
    c3: new Color(0.5, 0.5, 0.5),
  },
};
