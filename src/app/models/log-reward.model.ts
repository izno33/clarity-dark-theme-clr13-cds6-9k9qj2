import { LogItem } from './log-item.model';

export class LogReward extends LogItem {
  RewardName!: string;
  Count!: number;

  headers = ['RewardName', 'Count'];

  fix(data: any[]): void {
    console.log('Rewards: No fix yet!');
  }
}
