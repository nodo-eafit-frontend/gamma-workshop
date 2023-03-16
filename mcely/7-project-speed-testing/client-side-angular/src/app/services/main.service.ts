import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private response: any;
  private url: string = 'http://localhost:3001/';
  constructor(private http: HttpClient) {}

  getMainInfo(): any {
    // this.http.get(url);

    return { dummy: 'dummy' };
  }
}
