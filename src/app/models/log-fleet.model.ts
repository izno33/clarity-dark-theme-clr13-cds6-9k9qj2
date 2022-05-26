export class LogFleet {
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
  MiningBonus!: number;

  private headers = [
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
  items: LogFleet[] = [];
  itemSize = 29;

  add(data: any[]) {
    this.fix(data);
    const l = data.length;
    if (l === this.itemSize) {
      const summary = Object.fromEntries(
        this.headers.map((_, i) => [this.headers[i], data[i]])
      );
      // const summary = Object.assign(...this.headers.map((k, i) => ({[k]: data[i]})));
      this.items.push(summary as LogFleet);
    } else {
      console.error("Mauvaise taille d'élément", data);
      this.fix(data);
      console.warn(data);
    }
  }

  fix(data: any[]) {
    if (data.length === 31) {
      this.decimalize(data, 14);
      this.decimalize(data, 15);
    }
    if (data.length === 35) {
      this.decimalize(data, 9);
      this.decimalize(data, 14);
      this.decimalize(data, 15);
      this.decimalize(data, 16);
      this.decimalize(data, 20);
      this.decimalize(data, 25);
    }
  }

  decimalize(data: any[], position: number) {
    const value = data.slice(position, position + 2).join('.');
    data.splice(position, 2, +value);
  }
}
