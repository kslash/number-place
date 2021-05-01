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

    const numbers = Array.from(value)
      .reduce((p, c, i) => {
        p[Math.trunc(i / 6)] += c;
        return p;
      }, Array(9).fill(""))
      .map((v) => decode(v))
      .map((v: number[]) => {
        return v
          .reduce((p, c) => (p << 5) + c, 0);
      })
      .map((v: number) => { console.log(v); return v })
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

    const value = this.rows.map((row) => {
      return row.cells.map((v) => v.value).reduce((p, c) => p * 10 + c, 0);
    }).reduce((p, c) => {
      let i = 6;
      let arr = [];
      while (i-- > 0) {
        arr.unshift(c & 0x1F);
        c = (c >>> 5)
      }
      return p + encode(arr);
    }, "");

    return value;
  }
}

const TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456"

function encode(value: number[]): string {
  return value.reduce((p, v) => p + TABLE.charAt(v), "");
}

function decode(value: string): number[] {
  return Array.from(value).map((v) => TABLE.indexOf(v));
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

}

export class Cell {
  public key: string
  public locked: boolean = true;
  constructor(public row: number, public col: number, public block: number, public value: number) {
    this.key = `${row}-${col}`
  }
}
