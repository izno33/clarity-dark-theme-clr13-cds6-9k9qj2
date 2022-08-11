import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import * as fr from '@angular/common/locales/fr';
import * as en from '@angular/common/locales/en';

import { BattleLogRoutingModule } from './battle-log-routing.module';
import { LogComponent } from './components/log/log.component';
import { FleetComponent } from './components/log/fleet/fleet.component';
import { RewardComponent } from './components/log/reward/reward.component';
import { SummaryComponent } from './components/log/summary/summary.component';
import { EventComponent } from './components/log/event/event.component';
import { YesNoComponent } from './components/yes-no/yes-no.component';


@NgModule({
  declarations: [LogComponent, FleetComponent, RewardComponent, SummaryComponent, EventComponent, YesNoComponent],
  imports: [
    CommonModule,
    BattleLogRoutingModule,
    ClarityModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
})
export class BattleLogModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
