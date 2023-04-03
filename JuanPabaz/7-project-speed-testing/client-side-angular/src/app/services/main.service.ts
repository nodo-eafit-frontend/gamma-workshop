import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private response:any={};
  private url:string = 'http://localhost:3001/';
  constructor(private http:HttpClient) { 
    this.http.get(this.url).subscribe((response:any)=>{
      console.log('MainService');
      this.response=response;
    });
    
  }

  get main():any{

    return this.response.main;
    
  }

  get title():any{

    return this.response.title_page;
    
  }
}
