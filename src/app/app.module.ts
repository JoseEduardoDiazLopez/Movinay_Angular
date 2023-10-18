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
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';

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
    NavComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
