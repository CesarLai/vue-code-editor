<template>
  <div class="page-container">
    <header class="page-header">vue-code-editor</header>
    <section class="page-content">
      <div class="panel-files"></div>
      <div class="panel-editor">
        <code-editor :theme="theme" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CodeEditor from "@/components/CodeEditor";
import { EditorThemes } from "@/components/CodeEditor/types";

@Options({
  components: {
    CodeEditor,
  },
})
export default class WorkBench extends Vue {
  theme = EditorThemes.DARK;
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .page-header {
    flex-shrink: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #353536;
    color: #d3d3d3;
    text-align: center;
  }

  .page-content {
    display: flex;
    flex-grow: 1;
    overflow: hidden;

    .panel-files {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      width: 20%;
      background: #2a2a2b;
    }

    .panel-editor {
      flex-grow: 1;
      overflow: scroll;
    }
  }
}
</style>
