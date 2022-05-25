import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sucursales } from '../models/sucursales.models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SucursalesService {

  public url: string = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;

  constructor(public sHttp: HttpClient) { }

  getToken(){
    const token2 = localStorage.getItem('token');
    if(token2 != undefined){
      this.token = token2
    }else{
     return this.token = '';
    }
  }

  agregarSucursal(modeloUsuario: Sucursales, _token) : Observable<any> {
    let parametros = JSON.stringify(modeloUsuario);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.put(this.url + '/agregarSucursales', parametros, {headers: headersToken});
  }

  obtenerSucursal(_token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', this.token)
    console.log(headersToken)
    return this.sHttp.get(this.url + '/ObternerSucursales', {headers: headersToken});
  }

  editarSucursal(modeloSucrsales: Sucursales, _token) : Observable<any> {
    let parametros = JSON.stringify(modeloSucrsales);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.put(this.url + '/EditarSucursales/' + modeloSucrsales._id, parametros, {headers: headersToken});
  }

  eliminarSucursal(modeloSucrsales: Sucursales, _token) : Observable<any> {
    let parametros = JSON.stringify(modeloSucrsales);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.put(this.url + '/Eliminarsucursales/' + modeloSucrsales._id, parametros, {headers: headersToken});
  }

  obtenerSucursalId(idSucursal, _token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', this.token);
    return this.sHttp.get(this.url + '/ObtenerSucursalesId/' + idSucursal, {headers: headersToken});
  }
}
