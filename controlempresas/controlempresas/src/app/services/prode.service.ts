import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosE } from '../models/productos.models';

@Injectable({
  providedIn: 'root'
})

export class ProdeService {

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

  agregarProdE(modeloProdE: ProductosE, _token) : Observable<any> {
    let parametros = JSON.stringify(modeloProdE);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.put(this.url + '/agregarProducto', parametros, {headers: headersToken});
  }

  obtenerProdE(_token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.get(this.url + '/Obtenerproductos', {headers: headersToken});
  }

  editarProdE(modeloProdE: ProductosE, _token) : Observable<any> {
    let parametros = JSON.stringify(modeloProdE);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.put(this.url + '/editarProducto/' + modeloProdE._id, parametros, {headers: headersToken});
  }

  eliminarProdE(modeloProdE: ProductosE, _token) : Observable<any> {
    let parametros = JSON.stringify(modeloProdE);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.put(this.url + '/eliminarProducto/' + modeloProdE._id, parametros, {headers: headersToken});
  }

  obtenerProdEId(idProductoE, _token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', this.token);
    return this.sHttp.get(this.url + '/ObtenerProductos/' + idProductoE, {headers: headersToken});
  }
}

