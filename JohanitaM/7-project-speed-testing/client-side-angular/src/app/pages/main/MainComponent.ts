import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  main: any = {};

  constructor(public mainService: MainService) {
    this.main = this.mainService.main;
  }

  // Initialize

  // Update

  // Destroy
}