import { LogItem } from './log-item.model';

export class BattleLog<T extends LogItem> {
  headers!: String[];
  itemSize!: number;
  items: T[] = [];
  item: T;

  constructor(item: T) {
    this.item = item;
    this.headers = item.headers;
  }

  check(headers: any[]): boolean {
    return this.headers.length === headers.length;
  }

  add(data: any[]): void {
    console.debug('Fixing item ' + this.item.constructor.name);
    this.item.fix(data);
    const l = data.length;
    if (l === this.headers.length) {
      const summary = Object.fromEntries(
        this.headers.map((_, i) => [this.headers[i], data[i]])
      );
      this.items.push(summary as T);
    } else {
      console.error('Wrong item size', data);
    }
  }

  clear(): void {
    this.items.length = 0
  }
}
