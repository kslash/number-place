export class NumberPlace {

  public rows: Block[];
  public cols: Block[];
  public blocks: Block[];

  constructor() {
    const numbers = Array(81)
      .fill(0)
      .map((x, i) => 0);

    const cells = numbers.map((v, i) => {
      return new Cell(Math.trunc(i / 9), i % 9, Math.trunc(i / 27) * 3 + Math.trunc((i % 9) / 3), v);
    })
    this.rows = cells.reduce((p, c, i, a) => {
      p[Math.trunc(i / 9)].push(c);
      return p;
    }, Array.from(new Array<Array<Cell>>(9), () => new Array<Cell>()))
      .map((v, i) => new Block(i, v));

    this.cols = cells.reduce((p, c, i, a) => {
      p[i % 9].push(c);
      return p;
    }, Array.from(new Array<Array<Cell>>(9), () => new Array<Cell>()))
      .map((v, i) => new Block(i, v));

    this.blocks = cells.reduce((p, c, i, a) => {
      const row = Math.trunc(i / 27);
      const col = Math.trunc((i % 9) / 3)
      p[row * 3 + col].push(c);
      return p;
    }, Array.from(new Array<Array<Cell>>(9), () => new Array<Cell>()))
      .map((v, i) => new Block(i, v));
  }

  public set code(value: string) {
    const numbers = value
      .split("-")
      .map((v) => {
        // base64url -> base64
        const padded = (v + "===").slice(0, v.length + (v.length % 4));
        return padded.replace(/-/g, "+").replace(/_/g, "/");
      })
      .map((v) => atob(v))
      .map((v: string) => {
        return Array.from(v)
          .map((s) => s.charCodeAt(0))
          .reduce((p, c) => (p << 8) + c, 0);
      })
      .map((v: number) => ("00000000" + v).slice(-9))
      .map((v: String) => Array.from(v).map(s => parseInt(s, 10)));

    for (const [i, row] of numbers.entries()) {
      for (const [j, v] of row.entries()) {
        const cell = this.rows[i].cells[j];
        cell.value = v;
        cell.locked = (v > 0);
      }
    }
  }

  public get code(): string {
    return this.rows.map((r) => r.toString()).join("-");
  }
}

export class Block implements Iterable<Cell> {
  constructor(public num: number, public cells: Cell[]) { }

  [Symbol.iterator]() {
    let i = 0;
    const cells = this.cells;
    return {
      next(): IteratorResult<Cell> {
        if (i < cells.length) {
          return {
            done: false,
            value: cells[i++]
          }
        } else {
          return {
            done: true,
            value: null
          }
        }
      }
    }
  }

  public toString(): string {
    const value = this.cells.map((v) => v.value).reduce((p, c) => p * 10 + c, 0);
    const v1 = (value & 4278190080) >> 24; // 0xFF000000
    const v2 = (value & 16711680) >> 16;   // 0x00FF0000
    const v3 = (value & 65280) >> 8;      // 0x0000FF00
    const v4 = value & 255;              // 0x000000FF
    return btoa([v1, v2, v3, v4].map((v) => String.fromCharCode(v)).join(""))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '')
  }
}

export class Cell {
  public key: string
  public locked: boolean = true;
  constructor(public row: number, public col: number, public block: number, public value: number) {
    this.key = `${row}-${col}`
  }
}
