import { EditorThemes, ThemeConfig } from "../types";
import DARK_THEME from "./dark";
import LIGHT_THEME from "./light";

/**
 * Editor Theme Factory
 * Use dark theme default.
 *
 * @param theme
 */
const editorThemeFactory = (theme: EditorThemes): ThemeConfig => {
  switch (theme) {
    case EditorThemes.DARK:
      return DARK_THEME;
    case EditorThemes.LIGHT:
      return LIGHT_THEME;
    default:
      return DARK_THEME;
  }
};

export default editorThemeFactory;
