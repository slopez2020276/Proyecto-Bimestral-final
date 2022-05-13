import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarlosComponent } from './components/carlos/carlos.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: 'equipoUsiario1', component: CarlosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
