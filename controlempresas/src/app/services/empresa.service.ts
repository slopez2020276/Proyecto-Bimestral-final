import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresas } from '../models/empresas.models';
import {Productos} from '../models/productos.models';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  public url : String = 'http://localhost:3000/api'
  
  constructor(public shttp: HttpClient) {}
  
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  agregarEmpresa(modeloEmpresa: Empresas, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloEmpresa);
    return this.shttp.post(this.url + '/agregarEmpresa', parametros, {headers: headersToken})
  }

  obtenerEmpresa(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this.shttp.get(this.url + '/obtenerEmpresa', {headers: headersToken});
  }

  /* PRODUCTOS */

   agregarProductos(modeloProducto: Productos, token): Observable<any> {
     let parametros = JSON.stringify(modeloProducto);
     let headersToken = this.headersVariable.set('Authorization', token)
     return this.shttp.put(this.url + '/agregarProductoEmpresa', parametros, {headers: headersToken})
  }

   obtenerProductos(token): Observable<any> {
     let headersToken = this.headersVariable.set('Authorization', token)
     return this.shttp.get(this.url + '/obtenerProductosEmpresa', {headers: headersToken})
  }

  obtenerProductosById(idProducto, token): Observable<any> {
     let headersToken = this.headersVariable.set('Authorization', token)
     return this.shttp.get(this.url + '/obtenerProductobyid' + idProducto, {headers: headersToken})
  }

  editarProducto(modeloProducto: Productos, token): Observable<any> {
      let headersToken = this.headersVariable.set('Authorization', token)
      let parametros = JSON.stringify(modeloProducto)
      return this.shttp.put(this.url + '/editarProductoEmpresa/' + modeloProducto._id, parametros, {headers: headersToken})
  }
    
  eliminarProducto(idProducto, token){
      let headersToken = this.headersVariable.set('Authorization', token)
       return this.shttp.delete(this.url + '/eliminarProductoEmpresa/'+ idProducto, {headers: headersToken})
  }

  agregarProductoaSucursal(modeloProducto: Productos, token, idSucursal, idProducto): Observable<any>{
    let parametros = JSON.stringify(modeloProducto);
    let headersToken = this.headersVariable.set('Authorization', token);
    return this.shttp.put(this.url + '/agregarProductosSucursal' + idSucursal + '/' + idProducto, parametros, {headers: headersToken})
  }
}
