import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CitasCComponent } from './citas-c/citas-c.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitasCComponent,
    TabsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
