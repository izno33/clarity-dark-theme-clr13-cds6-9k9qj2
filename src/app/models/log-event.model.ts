import { LogItem } from './log-item.model';

export class LogEvent extends LogItem {
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

  headers = [
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
  fix(data: any[]): void {
    console.log('Event: No fix yet!');
  }
}
