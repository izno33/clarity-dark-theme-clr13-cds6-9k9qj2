import { Component, Input, OnInit } from '@angular/core';
import { BattleLog } from 'src/app/models/battle-log.model';
import { LogSummary } from 'src/app/models/log-summary.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() summary!: BattleLog<LogSummary>

  constructor() { }

  ngOnInit(): void {
  }

}
