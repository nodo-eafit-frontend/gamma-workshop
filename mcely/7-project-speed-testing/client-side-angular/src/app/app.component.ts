import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Reflextest';

  constructor() {
    setTimeout(() => {
      this.changeName('Nuevo Titulo');
    }, 3000);
  }

  changeName(newName: string): void {
    this.title = newName;
  }
}
