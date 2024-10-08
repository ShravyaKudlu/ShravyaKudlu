import chroma from "chroma-js";
import { eduPink, expPink, contactsPink } from "./images";

const basePink = "#ce5980";

export const pinkThemeLight = {
  type: "light",
  primary: chroma(basePink).saturate(0.4).hex(),
  primary400: chroma(basePink).saturate(0.3).hex(),
  primary600: chroma(basePink).saturate(0.5).hex(),
  primary80: chroma(basePink).alpha(0.8).hex(),
  primary50: chroma(basePink).alpha(0.6).hex(),
  primary30: chroma(basePink).alpha(0.4).hex(),
  secondary: chroma("#ffffff").mix(basePink, 0.1).hex(), // Slightly increased pink tint for white background
  secondary70: chroma("#ffffff").mix(basePink, 0.1).alpha(0.8).hex(),
  secondary50: chroma("#ffffff").mix(basePink, 0.1).alpha(0.6).hex(),
  tertiary: "#202020",
  tertiary80: "#202020cc",
  tertiary70: "#202020b3",
  tertiary50: "#20202080",
  eduimg: eduPink,
  expimg: expPink,
  contactsimg: contactsPink,
};

export const pinkThemeDark = {
  type: "dark",
  primary: chroma(basePink).saturate(0.4).hex(), // Matching saturation with light theme
  primary400: chroma(basePink).saturate(0.3).hex(),
  primary600: chroma(basePink).saturate(0.5).hex(),
  primary80: chroma(basePink).alpha(0.8).hex(),
  primary50: chroma(basePink).alpha(0.6).hex(),
  primary30: chroma(basePink).alpha(0.4).hex(),
  secondary: "#000000", // Keeping pure black
  secondaryOverlay: chroma(basePink).alpha(0.15).hex(), // Reduced opacity for subtle pink effect
  tertiary: "#e0e0e0",
  tertiary80: "#e0e0e0cc",
  tertiary70: "#e0e0e0b3",
  tertiary50: "#e0e0e080",
  eduimg: eduPink,
  expimg: expPink,
  contactsimg: contactsPink,
};
