import type { Colors } from "./wwtypes";

interface hex {
  [index: number | string]: number | string;
}

const objs: hex = {
  0: "f",
  1: "e",
  2: "d",
  3: "c",
  4: "b",
  5: "a",
  6: 9,
  7: 8,
  8: 7,
  9: 6,
  a: 5,
  b: 4,
  c: 3,
  d: 2,
  e: 1,
  f: 0
};

export function invertHex(hex: string): string {
  return (
    "#" +
    hex
      .split("")
      .map((h) => (h !== "#" ? objs[h.toLowerCase()] : ""))
      .join("")
  );
}

export const colorsObj: Colors[] = [
  {
    color: "#121212",
    desc: "Nice color for a dark background.",
    name: "Subtle black"
  },
  {
    color: "#E5D8BE",
    name: "Pastel"
  },
  {
    color: "#2F2D38",
    desc: "I found it on google.",
    name: "Blueish cool black "
  }
];
