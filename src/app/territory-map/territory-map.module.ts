import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerritoryMapRoutingModule } from './territory-map-routing.module';
import { MapComponent } from './components/map/map.component';
import { ZoneDetailComponent } from './components/zone-detail/zone-detail.component';


@NgModule({
  declarations: [MapComponent, ZoneDetailComponent],
  imports: [
    CommonModule,
    TerritoryMapRoutingModule,
  ]
})
export class TerritoryMapModule { }
