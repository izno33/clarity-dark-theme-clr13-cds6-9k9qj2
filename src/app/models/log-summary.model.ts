export class LogSummary {
  PlayerName!: string;
  PlayerLevel!: number;
  Outcome!: string;
  ShipName!: string;
  ShipLevel!: number;
  ShipStrength!: number;
  ShipXP!: number;
  OfficerOne!: string;
  OfficerTwo!: string;
  OfficerThree!: string;
  HullHealth!: number;
  HullHealthRemaining!: number;
  ShieldHealth!: number;
  ShieldHealthRemaining!: number;
  Location!: string;
  Timestamp!: Date;

  private headers = [
    'PlayerName',
    'PlayerLevel',
    'Outcome',
    'ShipName',
    'ShipLevel',
    'ShipStrength',
    'ShipXP',
    'OfficerOne',
    'OfficerTwo',
    'OfficerThree',
    'HullHealth',
    'HullHealthRemaining',
    'ShieldHealth',
    'ShieldHealthRemaining',
    'Location',
    'Timestamp',
  ]
  items: LogSummary[] = [];
  itemSize = 16;

  add(data: any[]) {
    const l = data.length;
    if (l === this.itemSize) {
      const summary = Object.fromEntries(this.headers.map((_, i) => [this.headers[i], data[i]]));
      // const summary = Object.assign(...this.headers.map((k, i) => ({[k]: data[i]})));
      this.items.push(summary as LogSummary)
    } else {
      console.error("Mauvaise taille d'élément", data);
    }
  }
}