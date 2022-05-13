import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { CarlosComponent } from './components/carlos/carlos.component';
import { JavierComponent } from './components/javier/javier.component';
import { MarlonComponent } from './components/marlon/marlon.component';
import { DanielComponent } from './components/daniel/daniel.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    LoginComponent,
    EmpresaComponent,
    CarlosComponent,
    JavierComponent,
    MarlonComponent,
    DanielComponent,
    SucursalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
