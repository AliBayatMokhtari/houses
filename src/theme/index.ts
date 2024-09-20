interface Color {
  hex: `#${string}`;
  rgb: `${number},${number},${number}`;
}

type ElementColorKey =
  | "primary"
  | "secondary"
  | "lightGray"
  | "darkGray"
  | "background"
  | "white";

export interface Theme {
  colors: {
    element: Record<ElementColorKey, Color>;
    text: Record<"primary" | "secondary" | "hyperlink", Color>;
  };
}

export const theme: Theme = {
  colors: {
    element: {
      primary: { hex: "#EB5440", rgb: "235,82,64" },
      secondary: { hex: "#4A4B4C", rgb: "74,75,76" },
      lightGray: { hex: "#E8E8E8", rgb: "232,232,232" },
      darkGray: { hex: "#C3C3C3", rgb: "195,195,195" },
      background: { hex: "#F6F6F6", rgb: "246,246,246" },
      white: { hex: "#FFFFFF", rgb: "255,255,255" },
    },
    text: {
      primary: { hex: "#000000", rgb: "0,0,0" },
      secondary: { hex: "#4A4B4C", rgb: "74,75,76" },
      hyperlink: { hex: "#067BC2", rgb: "6,123,194" },
    },
  },
};
