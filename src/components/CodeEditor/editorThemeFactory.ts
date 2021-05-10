import { EditorThemes, ThemeConfig } from "./types";

/** 暗色主题 */
const DARK_THEME: ThemeConfig = {
  ".cm-scroller": {
    background: "#232323",
  },
  ".cm-gutters": {
    background: "transparent",
    borderRight: "none",
  },
  ".cm-gutter.cm-lineNumbers": {
    backgroundColor: "#232323",
  },
  ".cm-lineNumbers .cm-gutterElement": {
    minWidth: "53px",
    height: "22px",
    lineHeight: "22px",
    padding: "0 20px 0 0",
  },
  ".cm-content": {
    color: "#d3d3d3",
  },
  ".cm-content .cm-line": {
    height: "22px",
    lineHeight: "22px",
  },
};

/** 浅色主题 */
const WHITE_THEME: ThemeConfig = {
  ".cm-content": { color: "#d3d3d3" },
  ".cm-gutters": {},
};

/**
 * 编辑器主题生成方法
 *
 * @param theme 主题类型
 */
const editorThemeFactory = (theme: EditorThemes): ThemeConfig => {
  switch (theme) {
    case EditorThemes.DARK:
      return DARK_THEME;
    case EditorThemes.WHITE:
      return WHITE_THEME;
    default:
      return DARK_THEME;
  }
};

export default editorThemeFactory;
