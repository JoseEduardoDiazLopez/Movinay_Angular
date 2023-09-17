import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitasCComponent } from './citas-c/citas-c.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'principal', component: HomeComponent},
  { path: 'citasC', component: CitasCComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
