import type { StyleSpec } from "style-mod";

/**
 * Editor Theme Enum
 */
export enum EditorThemes {
  DARK = "theme-dark",
  LIGHT = "theme-light",
}

/**
 * Theme Config Type
 */
export interface ThemeConfig {
  [key: string]: StyleSpec;
}
