import { LogItem } from './log-item.model';

export class LogEvent extends LogItem {
  Round!: number;
  BattleEvent!: number;
  Type!: string; // Officer Ability || Attack || Shield Depleted || Charging Weapons || Combatant Destroyed
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
  AbilityType!: string; // OA
  AbilityValue!: number; // decimal // OA
  AbilityName!: string; // OA
  AbilityOwnerName!: string; // OA
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
    if (data.length === 24) {
      this.decimalize(data, 17);
    }
  }
}
