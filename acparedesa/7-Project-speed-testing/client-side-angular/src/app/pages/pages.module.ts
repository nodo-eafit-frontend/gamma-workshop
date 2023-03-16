import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats/stats.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [StatsComponent, MainComponent],
  imports: [CommonModule],
})
export class PagesModule {}
