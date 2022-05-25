import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosS } from '../models/producs.models';
import { ProductosE } from '../models/productos.models'
import { Sucursales } from '../models/sucursales.models';

@Injectable({
  providedIn: 'root'
})
export class ProdsService {
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

  agregarProdS(modeloProdE: ProductosS, id ,_token) : Observable<any> {
    let parametros = JSON.stringify(modeloProdE);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.put(this.url + '/agregarProductoSucursales/' + id , parametros, {headers: headersToken});
  }

  obtenerProdS( _token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.get(this.url + '/ObtenerproductosSucursal/', {headers: headersToken});
  }

  editarProdS(modeloProdE: ProductosS, _token) : Observable<any> {
    let parametros = JSON.stringify(modeloProdE);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.put(this.url + '/editarProductoSucursales/' + modeloProdE._id, parametros, {headers: headersToken});
  }

  eliminarProdS(modeloProdE: ProductosS, _token) : Observable<any> {
    let parametros = JSON.stringify(modeloProdE);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.put(this.url + '/eliminarProductoSucursal/' + modeloProdE._id, parametros, {headers: headersToken});
  }

  ventasP(modeloProdE: ProductosS, _token) : Observable<any> {
    let parametros = JSON.stringify(modeloProdE);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.put(this.url + '/Venta/' + modeloProdE._id, parametros, {headers: headersToken});
  }

  obtenerProdSId(idProductoE, _token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', this.token);
    return this.sHttp.get(this.url + '/ObtenerProductos/' + idProductoE, {headers: headersToken});
  }
}
