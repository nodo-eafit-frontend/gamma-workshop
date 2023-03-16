import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats/stats.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    StatsComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
  exports: [
    StatsComponent,
    MainComponent,
  ]
})
export class PagesModule { }
