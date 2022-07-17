import { Component, Input, OnInit } from '@angular/core';
import { BattleLog } from 'src/app/models/battle-log.model';
import { LogFleet } from 'src/app/models/log-fleet.model';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit {
  @Input() fleet!: BattleLog<LogFleet>

  constructor() { }

  ngOnInit(): void {
  }

}
