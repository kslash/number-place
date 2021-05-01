<template>
  <div id="number-place">
    <NumberPlace
      :code="code"
      :selectedCell="selectedCell"
      :edit="edit"
      @select="onSelect"
      @valueInput="onValueInput"
      @share="onShare"
      @exportImage="onExportImage"
      @toggleEdit="onToggleEdit"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Cell } from "../components/number_place";
declare var navigator: any;
declare class ClipboardItem {
  constructor(data: { [mimeType: string]: Blob });
}

export default Vue.extend({
  async asyncData({ params }) {
    const code = params.code;
    return { code };
  },
  data() {
    return {
      selectedCell: new Cell(-1, -1, -1, -1),
      code: "",
      edit: "edit" in this.$route.query,
    };
  },
  methods: {
    onSelect(cell: Cell): void {
      this.selectedCell = cell;
    },
    onValueInput(value: number): void {
      this.selectedCell.value = value;
    },
    onShare(code: string, blob: Blob) {
      this.code = code;
      this.$router.replace({ name: "code", params: { code } });
      navigator.clipboard.write([new ClipboardItem({ [blob.type]:blob })]).then(()=> {
        const text = this.edit ? "問題を作成しました。解いてみて！": "ナンプレに挑戦中！"
        const url = encodeURIComponent(window.location.href);
        const hashtags = encodeURIComponent("ナンプレ");
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`, "_blank");
      });
    },
    onToggleEdit(code: string, edit: boolean) {
      console.log("onToggleEdit", code, edit);
      this.edit = edit;
      if (edit) {
        this.$router.push({path: `/${code}?edit`});
      } else {
        this.$router.push({path: `/${code}`});
      }
    },
    onExportImage(blob: Blob) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.download = `numberplace_${this.code}.png`;
      a.href = url;
      a.click();
      a.remove();
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 1e4);
    },
  },
});
</script>

<style>
#number-place {
  width: 80vmin;
  height: 80vmin;
}
</style>
