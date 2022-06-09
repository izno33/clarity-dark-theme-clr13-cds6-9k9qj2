import { Component, Input, OnInit } from '@angular/core';
import { BattleLog } from 'src/app/models/battle-log.model';
import { LogReward } from 'src/app/models/log-reward.model';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {
  @Input() reward!: BattleLog<LogReward>

  constructor() { }

  ngOnInit(): void {
  }

}
