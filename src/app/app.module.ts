import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import { MapComponent } from './components/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { ZoneDetailComponent } from './components/zone-detail/zone-detail.component';
import { LogComponent } from './components/log/log.component';
import { FormsModule } from '@angular/forms';
import { FleetComponent } from './components/log/fleet/fleet.component';
import { RewardComponent } from './components/log/reward/reward.component';
import { SummaryComponent } from './components/log/summary/summary.component';
import { EventComponent } from './components/log/event/event.component';

@NgModule({
  declarations: [AppComponent, MapComponent, ZoneDetailComponent, LogComponent, FleetComponent, RewardComponent, SummaryComponent, EventComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    CdsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
