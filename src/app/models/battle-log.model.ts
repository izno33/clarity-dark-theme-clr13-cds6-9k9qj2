import { Subject } from 'rxjs';
import { LogItem } from './log-item.model';

export class BattleLog<T extends LogItem> {
  headers!: String[];
  itemSize!: number;
  items: T[] = [];
  item: T;
  needRefresh$ = new Subject<boolean>();

  constructor(item: T) {
    this.item = item;
    this.headers = item.headers;
  }

  check(headers: any[]): boolean {
    return this.headers.length === headers.length;
  }

  add(data: any[]): void {
    if (data.length === this.headers.length) {
      const item: T = Object.assign(Object.create(this.item), Object.fromEntries(
        this.headers.map((_, i) => [this.headers[i], this.decimal(data[i])])
      ));
      this.items.push(item);
    } else {
      console.error('Wrong item size', data);
    }
  }

  decimal(data: string) {
    if (data.match(/^\d+,\d+$/)) {
      return data.replace(',', '.');
    } else {
      return data;
    }
  }

  clear(): void {
    this.items.length = 0
  }

  refresh(): void {
    console.debug("Refreshing component", this);
    this.needRefresh$.next(false);
  }
}
