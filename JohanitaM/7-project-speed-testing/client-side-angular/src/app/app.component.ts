import { Component } from '@angular/core';

@Component({  //importan un componente desde angular, recibiendo un objeto con propiedades css, html y scss que es un decorador que se le agrega a la clase Appcomponent
  selector: 'app-root', //
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Reflextest';  //Le da a la clase el titulo de Reflextest
}
