import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url: string = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public shttp: HttpClient) { }

  login(usuario, obtenerToken = null): Observable<any> {
    if(obtenerToken != null){
      usuario.obtenerToken = obtenerToken;
    }
    let params = JSON.stringify(usuario);
    return this.shttp.post(this.url + '/login', params, {headers: this.headersVariable});
  }

  register(params){
    return this.shttp.post(this.url + '/registrar', params, {headers: this.headersVariable});
  }

  getToken(){
    const token2 = localStorage.getItem('token');
    if(token2 != undefined){
      this.token = token2
    }else{
     return this.token = '';
    }
  }

  getIdentidad() {
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidad2 != undefined){
      this.identidad = identidad2;
    }else{
      this.identidad = null;
    }

    return this.identidad;
  }

  registro(params){
    return this.shttp.post(environment.apiURL + '/registrar', params, {headers: this.headersVariable})
  }
}
