import { ThemeConfig } from "../types";

/**
 * Dark Theme Config
 */
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
    caretColor: "#ffffff",
  },
  ".cm-content .cm-line": {
    height: "22px",
    lineHeight: "22px",
  },
  ".cm-line .cmt-keyword": {
    color: "#3187cf",
  },
  ".cm-line .cmt-string": {
    color: "#cd7a60",
  },
  ".cm-line .cmt-operator": {
    color: "#ffffff",
  },
  ".cm-line .cmt-punctuation": {
    color: "#ffffff",
  },
  ".cm-line .cmt-typeName": {
    color: "#ffffff",
  },
  ".cm-line .cmt-variableName": {
    color: "#ffffff",
  },
  // ".cm-line .cmt-definition": {
  //   color: "#848484",
  // },
  ".cm-line .cmt-propertyName": {
    color: "#ffffff",
  },
  ".cm-line .cmt-number": {
    color: "#a0c793",
  },
  ".cm-line .cmt-comment": {
    color: "#4b8d3b",
  },
};

export default DARK_THEME;
