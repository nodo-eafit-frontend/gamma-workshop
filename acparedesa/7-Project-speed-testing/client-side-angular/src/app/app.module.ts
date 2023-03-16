import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main.component';
import { StatsComponent } from './pages/stats.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StatsComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
