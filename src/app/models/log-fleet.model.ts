import { LogItem } from './log-item.model';

export class LogFleet extends LogItem {
  FleetType!: string;
  Attack!: number;
  Defense!: number;
  Health!: number;
  ShipAbility!: string;
  CaptainManeuver!: string;
  OfficerOneAbility!: string;
  OfficerTwoAbility!: string;
  OfficerThreeAbility!: string;
  OfficerAttackBonus!: number; // decimal (player)
  DamagePerRound!: number;
  ArmourPierce!: number;
  ShieldPierce!: number;
  Accuracy!: number;
  CriticalChance!: number; // decimal
  CriticalDamage!: number; // decimal
  OfficerDefenseBonus!: number; // decimal (player)
  Armour!: number;
  ShieldDeflection!: number;
  Dodge!: number;
  OfficerHealthBonus!: number; // decimal (player)
  ShieldHealth!: number;
  HullHealth!: number;
  ImpulseSpeed!: number;
  WarpRange!: number;
  WarpSpeed!: number; // decimal
  CargoCapacity!: number;
  ProtectedCargo!: number;
  MiningBonus!: number; // decimal

  headers = [
    'FleetType',
    'Attack',
    'Defense',
    'Health',
    'ShipAbility',
    'CaptainManeuver',
    'OfficerOneAbility',
    'OfficerTwoAbility',
    'OfficerThreeAbility',
    'OfficerAttackBonus',
    'DamagePerRound',
    'ArmourPierce',
    'ShieldPierce',
    'Accuracy',
    'CriticalChance',
    'CriticalDamage',
    'OfficerDefenseBonus',
    'Armour',
    'ShieldDeflection',
    'Dodge',
    'OfficerHealthBonus',
    'ShieldHealth',
    'HullHealth',
    'ImpulseSpeed',
    'WarpRange',
    'WarpSpeed',
    'CargoCapacity',
    'ProtectedCargo',
    'MiningBonus',
  ];

  fix(data: any[]) {
    this.fixStrings(data);

    // Correction tous champs
    if (data.length === 36) {
      this.decimalize(data, 9);
      this.decimalize(data, 14);
      this.decimalize(data, 15);
      this.decimalize(data, 16);
      this.decimalize(data, 20);
      this.decimalize(data, 25);
      this.decimalize(data, 28);
    }
    // Correction OfficerAttackBonus
    if (data[10] < 100) {
      this.decimalize(data, 9);
    }

    // Correction MiningBonus
    if (data[-3] < 100) {
      this.decimalize(data, -3);
    }
    if (data.length === 34) {
      this.decimalize(data, 14);
      this.decimalize(data, 15);
      this.decimalize(data, 16);
      this.decimalize(data, 20);
      this.decimalize(data, 25);
    }
    if (data[15].length === 2) {
      this.decimalize(data, 14);
    }
    if (data[16].length === 2) {
      this.decimalize(data, 15);
    }
    if (data[17].length === 2) {
      this.decimalize(data, 16);
    }
    if (data[17].length <= 2) {
      this.decimalize(data, 14);
    }
    if (data[26].length === 2) {
      this.decimalize(data, 25);
    }
  }
}
