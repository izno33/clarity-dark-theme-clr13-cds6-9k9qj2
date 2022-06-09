import { Component, Input, OnInit } from '@angular/core';
import { BattleLog } from 'src/app/models/battle-log.model';
import { LogEvent } from 'src/app/models/log-event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event!: BattleLog<LogEvent>

  constructor() { }

  ngOnInit(): void {
  }

}
