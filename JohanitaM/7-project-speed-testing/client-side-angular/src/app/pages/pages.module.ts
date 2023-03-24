import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/MainComponent';
import { StatsComponent } from './stats/stats.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [MainComponent, StatsComponent],
  imports: [CommonModule, SharedModule],
})
export class PagesModule {}
