import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Calculator';

  screen = "";
  a:any;
  b:any;
  c:any;
  d = "";
  e = "";

  contenedor: any;
  arrayOperaciones: any = [];
  arrayResultados: any = [];
  verOperaciones: any = [];
  mostrarStorage: any;
  buttonHistory: any;
  btnActive = 'text-right';
  calculadoraPos: any;
  historyPos: any;
  estiloPos1?: string;
  estiloPos2?: string;

  @ViewChild('mostrarOperciones', { static: true }) mostrarOperaciones!: ElementRef;

  constructor(private renderer:Renderer2){

  }

  ngOnInit(): void {

    this.buttonHistory = true;
    this.btnActive = 'text-right';

    this.calculadoraPos = false;
    this.historyPos = true;

    this.verOperaciones = localStorage.getItem('operaciones') || [];

    this.crearHtmlStorage();


  }

  enterValue(value:string){

    if((this.b=="+") || (this.b=="-") || (this.b =="*") || (this.b =="/")){

      this.d = this.d + value;
      this.screen = this.screen + value;
      this.c = this.d

    }else{

      this.screen = this.screen + value;
      this.a = this.screen;
    }
  }

  condition(value:string){

    this.screen = this.screen + value;
    this.b = value;
  }

  clear(){

    this.screen = "";
    this.a = "";
    this.b = "";
    this.c = "";
    this.d = "";
  }

  result(){

    if(this.b == "+"){

      this.screen = `${this.screen} = ${(parseInt(this.a) + parseInt(this.c)).toString()}`;
      this.screen = (parseInt(this.screen) + parseInt(this.c)).toString();

      const operacion = `${this.a}${this.b}${this.c}`;
      const resultado = this.screen;

      this.crearHtml(operacion, resultado);
    }

    if (this.b == "-") {

      this.screen = `${this.screen} = ${(parseInt(this.a) - parseInt(this.c)).toString()}`;
      this.screen = (parseInt(this.screen) - parseInt(this.c)).toString();

      const operacion = `${this.a}${this.b}${this.c}`;
      const resultado = this.screen;

      this.crearHtml(operacion, resultado);
    }

    if (this.b == "*") {

      this.screen = `${this.screen} = ${(parseInt(this.a) * parseInt(this.c)).toString()}`;
      this.screen = (parseInt(this.screen) * parseInt(this.c)).toString();

      const operacion = `${this.a}${this.b}${this.c}`;
      const resultado = this.screen;

      this.crearHtml(operacion, resultado);
    }

    if (this.b == "/") {

      this.screen = `${this.screen} = ${(parseInt(this.a) / parseInt(this.c)).toString()}`;
      this.screen = (parseInt(this.screen) / parseInt(this.c)).toString();

      const operacion = `${this.a}${this.b}${this.c}`;
      const resultado = this.screen;

      this.crearHtml(operacion, resultado);
    }

    this.clear();
  }

  crearHtml(operacion:string, resultado:string){

    const mostrar = {
      operacion,
      resultado
    }

    var containerCard = document.createElement('div');
    var verOperacion = document.createElement('p');
    var verResultado = document.createElement('p'); 

    containerCard.classList.add('containerCard');
    verOperacion.classList.add('operation');
    verResultado.classList.add('resultOperation');

    containerCard.appendChild(verOperacion)
    containerCard.appendChild(verResultado)

    this.renderer.appendChild(this.mostrarOperaciones.nativeElement, containerCard);

    this.contenedor = containerCard;

    this.arrayOperaciones = [...this.arrayOperaciones, mostrar];

    this.arrayOperaciones.forEach((element:any) => {
      
      this.contenedor.querySelector('.operation').innerText = element.operacion
      this.contenedor.querySelector('.resultOperation').innerText = element.resultado
    });

    this.sincronizarStorage()
  }   

  sincronizarStorage(){
    localStorage.setItem('operaciones', JSON.stringify(this.arrayOperaciones))
  }

  crearHtmlStorage(){

    if (this.verOperaciones.length > 0) {
      
      var containerCard = document.createElement('div');
      var verOperacion = document.createElement('p');
      var verResultado = document.createElement('p'); 

      containerCard.classList.add('containerCard');
      verOperacion.classList.add('operation');
      verResultado.classList.add('resultOperation');

      containerCard.appendChild(verOperacion)
      containerCard.appendChild(verResultado)

      this.renderer.appendChild(this.mostrarOperaciones.nativeElement, containerCard);

      this.contenedor = containerCard;

      this.arrayResultados = JSON.parse(this.verOperaciones);

      this.arrayResultados.forEach((element:any) =>{
        this.crearHtml(element.operacion, element.resultado)
      })
    }
    
  }

  limpiarStorage(){
    
    if(this.arrayOperaciones.length > 0) {

      Swal.fire({
        icon:'question',
        title: 'DESEA LIMPIAR EL HISTORIAL?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,        
      }).then((result)=>{
        localStorage.removeItem('operaciones');
        Swal.fire({
          icon: 'success',
          title: 'El historial se limpio correctamente',
          confirmButtonText: 'Aceptar', 
        }).then((result)=>{
          if (result.value){

            location.reload();
          }
        })
      })
    }else{

      Swal.fire({
        icon:'info',
        title: 'EL HISTORIAL ESTÁ LIMPIO',
      })
    }
  }

  cambiarPosicion(){

    if (this.buttonHistory) {

      this.buttonHistory = false;
      this.btnActive = 'text-left';
    }else {
      this.buttonHistory = true;
      this.btnActive = 'text-right';
    }
  }

  cambiarPosicionDiv() {
    
    if (this.calculadoraPos && !this.historyPos) {

      this.calculadoraPos = false;
      this.historyPos = true;
      this.estiloPos1 = '';
      this.estiloPos2 = '';
    }else {
      this.calculadoraPos = true;
      this.historyPos = false;
      this.estiloPos1 = ' transform: translate(100%) ';
      this.estiloPos2 = ' transform: translate(-100%) ';
    }
  }
}




