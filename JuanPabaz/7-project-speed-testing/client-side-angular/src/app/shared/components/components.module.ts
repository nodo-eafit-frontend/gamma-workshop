import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './molecules/menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './molecules/card/card.component';
import { MaterialModule } from '../material.module';



@NgModule({
  
  imports: [CommonModule,RouterModule,MaterialModule],
  exports:[MenuBarComponent,CardComponent],
  declarations: [
    MenuBarComponent,
    CardComponent
  ],
})
export class ComponentsModule { }
