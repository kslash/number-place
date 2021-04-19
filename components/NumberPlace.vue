<template>
  <div ref="svgImage">
    <svg
      viewBox="0 0 820 820"
      width="80%"
      height="80%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        text {
          pointer-events: none;
        }

        rect {
          fill: white;
        }

        g.selected-row rect,
        g.selected-col rect {
          fill: #e2e7ed;
        }

        g:not(.edit).locked text {
          fill: #cfcfcf;
        }

        g.selected-value text {
          fill: #ff0000;
        }

        g.selected rect {
          fill: #bec6d4;
        }

        #row-lines line:first-child,
        #row-lines line:last-child,
        #row-lines line:nth-child(3n + 1),
        #col-lines line:first-child,
        #col-lines line:last-child,
        #col-lines line:nth-child(3n + 1) {
          stroke: black;
          stroke-linecap: round;
          stroke-width: 10;
        }
      </style>

      <g v-for="(block, i) in value.rows" :key="i">
        <g
          v-for="(cell, j) in block"
          :key="i * 9 + j"
          class="cell"
          :class="{
            selected: cell == selectedCell,
            'selected-row': cell.row == selectedCell.row,
            'selected-col': cell.col == selectedCell.col,
            'selected-block': cell.block == selectedCell.block,
            'selected-value': cell.value == selectedCell.value,
            locked: cell.locked,
            edit: edit,
          }"
        >
          <rect
            :x="boxSize * j + 5"
            :y="boxSize * i + 5"
            :width="boxSize"
            :height="boxSize"
            fill="transparent"
            @mouseover="selectCell(cell)"
          />

          <text
            v-if="cell.value > 0"
            tabindex="-1"
            focusable="false"
            :x="boxSize * j + boxSize / 2 + 5"
            :y="boxSize * i + boxSize / 2 + 20"
            font-size="48"
            stroke="black"
            stroke-width="0.5"
            text-anchor="middle"
          >
            {{ cell.value }}
          </text>
        </g>
      </g>

      <g id="row-lines">
        <line
          v-for="(block, i) in value.rows"
          :key="'line-row-' + i"
          :x1="5"
          :y1="boxSize * i + 5"
          :x2="boxSize * value.rows.length + 5"
          :y2="boxSize * i + 5"
          stroke="black"
          stroke-width="0.5"
        />

        <line
          :x1="5"
          :y1="boxSize * value.cols.length + 5"
          :x2="boxSize * value.rows.length + 5"
          :y2="boxSize * value.cols.length + 5"
          stroke="black"
        />
      </g>

      <g id="col-lines">
        <line
          v-for="(block, i) in value.cols"
          :key="'line-col-' + i"
          :x1="boxSize * i + 5"
          :y1="5"
          :x2="boxSize * i + 5"
          :y2="boxSize * value.cols.length + 5"
          stroke="black"
          stroke-width="0.5"
        />

        <line
          :x1="boxSize * value.rows.length + 5"
          :y1="5"
          :x2="boxSize * value.rows.length + 5"
          :y2="boxSize * value.cols.length + 5"
          stroke="black"
          stroke-width="0.5"
        />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { NumberPlace, Cell } from "./number_place";
const NOT_SELECTED = new Cell(-1, -1, -1, -1);

export default Vue.extend({
  props: {
    selectedCell: {
      type: Cell,
      default: NOT_SELECTED,
      required: true,
    },
    code: {
      type: String,
    },
    edit: {
      type: Boolean,
      default: false,
    },
    boxSize: {
      type: [Number, String],
      default: 90,
    },
    storokeWidth: {
      type: [Number, String],
      default: 1,
    },
  },
  data() {
    const value = new NumberPlace();
    if (this.code) {
      value.code = this.code;
    }
    return {
      value: value,
    };
  },
  computed: {
    selected(): boolean {
      return this.selectedCell.col >= 0 && this.selectedCell.row >= 0;
    },
  },
  created() {
    window.addEventListener("keydown", this.onKeyDown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.onKeyDown);
  },
  methods: {
    exportImage(): Promise<Blob> {
      const img = new Image();

      const p = new Promise(
        (resolve: (value: Blob) => void, reject: (reason: string) => void) => {
          img.addEventListener(
            "load",
            (event: Event) => {
              let canvas = document.createElement("canvas");
              canvas.width = 1200;
              canvas.height = 675;

              let context = canvas.getContext("2d");
              if (!context) return;
              context.globalAlpha = 0.0;
              context.clearRect(0, 0, canvas.width, canvas.height);

              context.globalAlpha = 1;
              context.drawImage(img, 272.5, 10, 655, 655);

              canvas.toBlob((blob: Blob | null) => {
                if (blob) {
                  resolve(blob);
                } else {
                  reject("error");
                }
              }, "image/png");
            },
            { once: true }
          );
          img.src =
            "data:image/svg+xml;charset=utf-8," +
            encodeURIComponent((this.$refs.svgImage as HTMLElement).innerHTML);
        }
      );
      return p;
    },
    selectCell(cell: Cell): void {
      this.$emit("select", cell);
    },
    onKeyDown(event: KeyboardEvent): void {
      if (!this.selected) return;

      switch (event.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          if (!this.edit && this.selectedCell.locked) return;
          const value = parseInt(event.key);
          if (value === this.selectedCell.value) {
            this.$emit("valueInput", 0);
          } else {
            this.$emit("valueInput", parseInt(event.key));
          }
          break;
        case "0":
        case "Delete":
          if (!this.edit && this.selectedCell.locked) return;
          this.$emit("valueInput", 0);
          break;
        case "Escape":
          this.$emit("select", NOT_SELECTED);
          event.preventDefault();
          break;
        case "ArrowUp":
        case "k":
          if (!this.selected) {
            this.$emit("select", this.value.rows[0].cells[0]);
            return;
          }
          this.$emit(
            "select",
            this.value.rows[Math.max(this.selectedCell.row - 1, 0)].cells[
              this.selectedCell.col
            ]
          );
          break;
        case "ArrowDown":
        case "j":
          if (!this.selected) {
            this.$emit("select", this.value.rows[0].cells[0]);
            return;
          }
          this.$emit(
            "select",
            this.value.rows[
              Math.min(this.selectedCell.row + 1, this.value.rows.length - 1)
            ].cells[this.selectedCell.col]
          );
          break;
        case "ArrowRight":
        case "l":
          if (!this.selected) {
            this.$emit("select", this.value.rows[0].cells[0]);
            return;
          }
          this.$emit(
            "select",
            this.value.cols[
              Math.min(this.selectedCell.col + 1, this.value.cols.length - 1)
            ].cells[this.selectedCell.row]
          );
          break;
        case "ArrowLeft":
        case "h":
          if (!this.selected) {
            this.$emit("select", this.value.rows[0].cells[0]);
            return;
          }
          this.$emit(
            "select",
            this.value.cols[Math.max(this.selectedCell.col - 1, 0)].cells[
              this.selectedCell.row
            ]
          );
          break;
        case "i":
          this.exportImage().then((blob) => this.$emit("exportImage", blob));
          break;
        case "e":
          const code = this.value.code;
          const edit = !this.edit;
          this.$emit("toggleEdit", code, edit);
          break;
        case "s":
          this.exportImage().then((blob) =>
            this.$emit("share", this.value.code, blob)
          );
        default:
          console.log(event);
          break;
      }
    },
  },
});
</script>

<style>
svg {
  background-color: #ffffff;
}
</style>
