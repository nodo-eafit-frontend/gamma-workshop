import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { StatsComponent } from './stats/stats.component';
import { SharedModule } from 'app/shared/shared.module';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [MainComponent, StatsComponent, GameComponent],
  imports: [CommonModule, SharedModule],
})
export class PagesModule {}
