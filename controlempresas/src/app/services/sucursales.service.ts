import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sucursales } from '../models/sucursales.models';
import {Observable} from 'rxjs';
import { Productos } from '../models/productos.models';


@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  public url : string = 'http://localhost:3000/api'
  constructor(public shttp: HttpClient) { }
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  agregarSucursales(modeloSucursales: Sucursales, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloSucursales);
    return this.shttp.post(this.url + '/agregarSucursal', parametros, { headers: headersToken})
  }

  obtenerSucursales(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this.shttp.get(this.url + '/obtenerSucursales', {headers: headersToken})
  }

  obtenerSucursalById(idSucursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this.shttp.get(this.url + 'obtenerSucursal/' + idSucursal, {headers: headersToken})
  }

  editarSucursal(modeloSucursales: Sucursales, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloSucursales)
    return this.shttp.put(this.url + '/editarSucursal/' + modeloSucursales._id, parametros, {headers: headersToken})
  }

  eliminarSucursal(idSucursal, token){
  let headersToken = this.headersVariable.set('Authorization', token)
  return this.shttp.delete(this.url + '/eliminarSucursales/' + idSucursal, {headers: headersToken})
  }

  /* PRODUCTOS */
  
  obtenerProductos(idSucursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this.shttp.get(this.url + '/obtenerProductos' + idSucursal, {headers: headersToken})
  }

  obtenerProductosById(idSucursal, token, idProducto): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    return this.shttp.get(this.url + '/obtenerProductosS' + idProducto + '/' + idSucursal, {headers: headersToken}) 
  }

  venderProducto(modeloProducto: Productos, idSucursal, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloProducto)
    return this.shttp.put(this.url + '/generarVenta/' +  modeloProducto._id + '/' + idSucursal, parametros, { headers: headersToken})
  }
  
}
