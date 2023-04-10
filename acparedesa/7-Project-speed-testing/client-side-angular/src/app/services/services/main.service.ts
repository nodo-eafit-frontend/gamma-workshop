import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private response: any;

  constructor() {
    const main = { dumy: 'dumy' };
    this.response = { main };
  }

  getMainInfo(): any {
    return this.response.main;
  }
}
