import { Component } from '@angular/core';
import { MainService } from 'app/services/main.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  constructor(public mainService: MainService) {
    console.log('StatsComponent', this.mainService.main);
  }
}
