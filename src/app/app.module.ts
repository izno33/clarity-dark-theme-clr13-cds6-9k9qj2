import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [BrowserModule, AppRoutingModule, ClarityModule, CdsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
