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
  CriticalHit!: boolean;
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

  get AttackerIsArmada(): boolean {
    return this._AttackerIsArmada;
  }

  set AttackerIsArmada(value: 'YES' | 'NO' | '--' | boolean) {
    this._AttackerIsArmada = value === 'YES' || value === true;
  }
}
