import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  constructor(public mainservice:MainService){
    console.log('StatsComponent',this.mainservice.main);
  }
}
