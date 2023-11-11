import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitasCComponent } from './components/citas-c/citas-c.component';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
import { TramitesComponent } from './components/tramites/tramites.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PagoEpComponent } from './components/pago-ep/pago-ep.component';
import { PagoEtComponent } from './components/pago-et/pago-et.component';
import { PagoEeComponent } from './components/pago-ee/pago-ee.component';
import { CrearDenunciaComponent } from './components/crear-denuncia/crear-denuncia.component';
import { PanelusuarioComponent } from './components/panelusuario/panelusuario.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}, // home principal
  {path: 'new-cita', component: CitasCComponent }, // citas
  {path: 'denuncias', component: DenunciasComponent}, //listar denuncias
  {path: 'crear-denuncia', component: CrearDenunciaComponent}, // form denuncias
  {path: 'tramites', component: TramitesComponent},
  {path: 'sesion',component: LoginComponent},
  {path: 'registro',component: RegisterComponent},
  {path: 'Pagoprincipal',component: PagoEpComponent},
  {path: 'Pagotarjeta',component: PagoEtComponent},
  {path: 'Pagoefectivo',component: PagoEeComponent},
  {path: 'mi-cuenta',component: PanelusuarioComponent},
  {path: 'chatbot',component:ChatbotComponent},
  {path:'**',component:PagenotfoundComponent}, // Si no existe la ruta, que todo lo retorne a principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
