import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { StatsComponent } from './pages/stats/stats.component';

const routes: Routes = [
  {path:'',component: MainComponent},
  {path:'stats',component: StatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
