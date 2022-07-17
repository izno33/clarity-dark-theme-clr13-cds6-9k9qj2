import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { BattleLogRoutingModule } from './battle-log-routing.module';
import { LogComponent } from './components/log/log.component';
import { FleetComponent } from './components/log/fleet/fleet.component';
import { RewardComponent } from './components/log/reward/reward.component';
import { SummaryComponent } from './components/log/summary/summary.component';
import { EventComponent } from './components/log/event/event.component';


@NgModule({
  declarations: [LogComponent, FleetComponent, RewardComponent, SummaryComponent, EventComponent],
  imports: [
    CommonModule,
    BattleLogRoutingModule,
    ClarityModule,
  ]
})
export class BattleLogModule { }
