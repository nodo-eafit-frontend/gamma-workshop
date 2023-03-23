import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './molecules/menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './molecules/card/card.component';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './organisms/footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [MenuBarComponent, CardComponent, FooterComponent],
  declarations: [MenuBarComponent, CardComponent, FooterComponent],
})
export class ComponentsModule {}
