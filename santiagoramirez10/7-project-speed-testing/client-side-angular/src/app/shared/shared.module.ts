import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material.module';

@NgModule({
  exports: [MaterialModule, ComponentsModule],
})
export class SharedModule {}
