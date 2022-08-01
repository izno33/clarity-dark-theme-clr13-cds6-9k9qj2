import { LogItem } from './log-item.model';

export class LogEvent extends LogItem {
  Round!: number;
  BattleEvent!: number;
  Type!: string;
  AttackerName!: string;
  AttackerAlliance!: string;
  AttackerShip!: string;
  AttackerIsArmada!: boolean;
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

  headers = [
    'Round',
    'BattleEvent',
    'Type',
    'AttackerName',
    'AttackerAlliance',
    'AttackerShip',
    'AttackerIsArmada',
    'TargetName',
    'TargetAlliance',
    'TargetShip',
    'TargetIsArmada',
    'CriticalHit',
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

  fix(data: any[]): void {
    console.log('Event: No fix yet!');
  }
}
