import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CitasCComponent } from './components/citas-c/citas-c.component';
import { TabsComponent } from './tabs/tabs.component';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
import { CrearDenunciaComponent } from './components/crear-denuncia/crear-denuncia.component';
import { TramitesComponent } from './components/tramites/tramites.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { CommonModule } from '@angular/common';
import { PagoEpComponent } from './components/pago-ep/pago-ep.component';
//import { PagoEtComponent } from './components/pago-et/pago-et.component';
//import { PagoEeComponent } from './components/pago-ee/pago-ee.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelusuarioComponent } from './components/panelusuario/panelusuario.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AdminVistaCitaComponent } from './components/admin-vista-cita/admin-vista-cita.component';
import { ValidarCitaComponent } from './components/validar-cita/validar-cita.component';
import { DocumentacionComponent } from './components/documentacion/documentacion.component';
import { PerfilComponent } from './components/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitasCComponent,
    TabsComponent,
    DenunciasComponent,
    CrearDenunciaComponent,
    TramitesComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    PagoEpComponent,
    //PagoEtComponent,
    //PagoEeComponent,
    FooterComponent,
    PanelusuarioComponent,
    ChatbotComponent,
    PagenotfoundComponent,
    AdminVistaCitaComponent,
    ValidarCitaComponent,
    DocumentacionComponent,
    PerfilComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
