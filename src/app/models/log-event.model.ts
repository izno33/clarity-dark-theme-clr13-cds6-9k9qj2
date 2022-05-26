export class LogEvent {
  Round!: number;
  BattleEvent!: number;
  Type!: string;
  AttackerName!: string;
  AttackerAlliance!: string;
  AttackerShip!: string;
  _AttackerIsArmada!: boolean;
  TargetName!: string;
  TargetAlliance!: string;
  TargetShip!: string;
  TargetIsArmada!: boolean;
  _CriticalHit!: boolean;
  HullDamage!: number;
  ShieldDamage!: number;
  MitigatedDamage!: number;
  TotalDamage!: number;
  AbilityType!: string;
  AbilityValue!: number;
  AbilityName!: string;
  AbilityOwnerName!: string;
  TargetDefeated!: string;
  TargetDestroyed!: string;
  ChargingWeapons!: string;

  private headers = [
    'Round',
    'BattleEvent',
    'Type',
    'AttackerName',
    'AttackerAlliance',
    'AttackerShip',
    '_AttackerIsArmada',
    'TargetName',
    'TargetAlliance',
    'TargetShip',
    'TargetIsArmada',
    '_CriticalHit',
    'HullDamage',
    'ShieldDamage',
    'MitigatedDamage',
    'TotalDamage',
    'AbilityType',
    'AbilityValue',
    'AbilityName',
    'AbilityOwnerName',
    'TargetDefeated',
    'TargetDestroyed',
    'ChargingWeapons',
  ];
  items: LogEvent[] = [];
  itemSize = 23;

  get AttackerIsArmada(): boolean {
    return this._AttackerIsArmada;
  }

  set AttackerIsArmada(value: 'YES' | 'NO' | '--' | boolean) {
    this._AttackerIsArmada = value === 'YES' || value === true;
  }

  get CriticalHit(): boolean {
    return this._CriticalHit;
  }

  set CriticalHit(value: 'YES' | 'NO' | '--' | boolean) {
    this._CriticalHit = value === 'YES' || value === true;
  }

  add(data: any[]) {
    const l = data.length;
    if (l === this.itemSize) {
      const summary = Object.fromEntries(
        this.headers.map((_, i) => [this.headers[i], data[i]])
      );
      // const summary = Object.assign(...this.headers.map((k, i) => ({[k]: data[i]})));
      this.items.push(summary as LogEvent);
    } else {
      console.error("Mauvaise taille d'élément", data);
    }
  }
}
