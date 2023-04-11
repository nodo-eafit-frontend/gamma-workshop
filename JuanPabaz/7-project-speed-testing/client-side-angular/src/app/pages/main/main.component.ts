import { Component,OnDestroy, OnInit} from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnDestroy{
  main: any = {};

  constructor(public mainservice:MainService){
    console.log('MainComponent -> constructor' ,this.main);
  }
  
  

  //initialize
  ngOnInit(): void {
    this.main=this.mainservice.main;
    console.log('MainComponent -> ngOnInit' ,this.main);
  }
  //Update
  //ngOnChanges(changes: SimpleChanges): void {

    //console.log('MainComponent -> ngOnChanges',changes['main']);
  //}

  //delete
  ngOnDestroy():void{
    console.log('Mori X_x');
  }
}
