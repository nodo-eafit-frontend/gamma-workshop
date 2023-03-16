import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { StatsComponent } from './stats/stats.component';



@NgModule({
  declarations: [MainComponent, StatsComponent],
  imports: [CommonModule],
})
export class PagesModule { }
