import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ProdeComponent } from './components/prode/prode.component';
import { ProdsComponent } from './components/prods/prods.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'prode', component: ProdeComponent},
  {path: 'prods', component: ProdsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
