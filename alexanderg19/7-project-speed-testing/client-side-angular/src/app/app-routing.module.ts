import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { StatsComponent } from './page/stats/stats.component';

const routes: Routes = [
  {path: '' , component: MainComponent},
  {path: 'stats' , component: StatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
