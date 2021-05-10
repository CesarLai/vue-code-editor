<template>
  <div class="code-editor">
    <div id="editor-container" :class="theme"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { EditorView, keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { defaultKeymap } from "@codemirror/commands";
import { lineNumbers } from "@codemirror/gutter";
import { javascript } from "@codemirror/lang-javascript";

import editorThemeFactory from "./editorThemeFactory";
import { EditorThemes, ThemeConfig } from "./types";

const DEFAULT_THEME = EditorThemes.DARK;

/**
 * 代码编辑器组件
 */
@Options({
  props: {
    theme: EditorThemes,
  },
  components: {},
  watch: {
    theme(value: EditorThemes) {
      this.themeConfig = editorThemeFactory(value);
    },
  },
})
export default class CodeEditor extends Vue {
  theme!: EditorThemes;

  editorView: EditorView | null = null;
  themeConfig: ThemeConfig = editorThemeFactory(DEFAULT_THEME);

  initCodeMirror(): void {
    const startState = EditorState.create({
      doc: "Hello World",
      extensions: [
        keymap.of(defaultKeymap),
        javascript(),
        lineNumbers(),
        EditorState.tabSize.of(4),
        EditorView.theme(this.themeConfig),
      ],
    });

    const editorContainer = this.$el.querySelector("#editor-container");
    if (editorContainer) {
      this.editorView = new EditorView({
        state: startState,
        parent: editorContainer,
      });
    }
  }

  mounted(): void {
    this.initCodeMirror();
  }
}
</script>

<style lang="scss" scoped>
.code-editor {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 300px;

  #editor-container {
    flex-grow: 1;

    &.theme-dark {
      background: #232323;
    }
  }
}
</style>
