import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitasCComponent } from './components/citas-c/citas-c.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'principal', component: HomeComponent},
  {path: 'citasC', component: CitasCComponent },
  {path: '**', redirectTo:'principal',pathMatch:"full"} // Si no existe la ruta, que todo lo retorne a principal
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
