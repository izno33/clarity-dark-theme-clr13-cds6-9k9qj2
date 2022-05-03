import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './components/log/log.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: 'map', component: MapComponent},
  { path: 'logs', component: LogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
