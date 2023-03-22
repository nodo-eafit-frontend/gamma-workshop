import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { StaticsComponent } from './pages/statics/statics.component';


const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'statics', component: StaticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
