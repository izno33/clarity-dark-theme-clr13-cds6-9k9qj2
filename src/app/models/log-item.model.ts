export abstract class LogItem {
  // itemSize!: number;
  headers!: string[];

  abstract fix(data: any[]): void;

  decimalize(data: any[], position: number) {
    const value = data.slice(position, position + 2).join('.');
    data.splice(position, 2, +value);
  }

  // Reconstruit les chaînes contenant initialement des virgules.
  fixStrings(data: any[]) {
    for(let i = 1; i < data.length; i++) {
      if (data[i].startsWith(' ')) {
        const value = data.slice(i - 1, i + 1).join(',');
        data.splice(i - 1, 2, value);
      }
    }
  }
}
