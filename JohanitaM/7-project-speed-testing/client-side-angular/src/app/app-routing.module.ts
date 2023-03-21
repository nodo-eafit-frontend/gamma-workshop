import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/MainComponent';
import { StatsComponent } from './pages/stats/stats.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'stats', component: StatsComponent},
];

@NgModule({   // este es un decorador para asignarle las propiedades a la clase approutingmodule.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
