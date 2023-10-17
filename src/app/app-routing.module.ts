import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitasCComponent } from './components/citas-c/citas-c.component';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent}, // home principal
  {path: 'new-cita', component: CitasCComponent }, // citas
  {path: 'denuncias', component: DenunciasComponent}, //listar denuncias
  {path: 'crear-denuncia', component: DenunciasComponent}, // form denuncias
  {path: '**', redirectTo:'home',pathMatch:"full"} // Si no existe la ruta, que todo lo retorne a principal
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
