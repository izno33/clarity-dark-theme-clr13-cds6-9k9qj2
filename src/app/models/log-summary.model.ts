import { LogItem } from './log-item.model';

export class LogSummary extends LogItem {
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

  headers = [
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
  ];

  fix(data: any[]): void {
    console.log('Summary: No fix yet!');
  }
}
