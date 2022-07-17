import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'map', loadChildren: () => import('./territory-map/territory-map.module').then(m => m.TerritoryMapModule)},
  { path: 'logs', loadChildren: () => import('./battle-log/battle-log.module').then(m => m.BattleLogModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
