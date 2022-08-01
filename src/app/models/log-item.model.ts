export abstract class LogItem {
  // itemSize!: number;
  headers!: string[];

  abstract fix(data: any[]): void;

  decimalize(data: any[], position: number) {
    const value = data.slice(position, position + 2).join('.');
    data.splice(position, 2, +value);
  }
}
