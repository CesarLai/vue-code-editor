import type { StyleSpec } from "style-mod";

/**
 * 编辑器主题类型
 */
export enum EditorThemes {
  DARK = "theme-dark",
  WHITE = "theme-white",
}

/**
 * 主题配置类型
 */
export interface ThemeConfig {
  [key: string]: StyleSpec;
}
