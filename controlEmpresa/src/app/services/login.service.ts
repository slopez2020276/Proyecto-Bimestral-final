import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: string = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token :any;

  public user :any;
  public identidad: null | any;


  constructor(public shttp: HttpClient) { }

  login(user: any, obtenerToken = null): Observable<any> {
    if(obtenerToken != null){
      user.obtenerToken = obtenerToken;
    }
    let params = JSON.stringify(user);
    return this.shttp.post(this.url + '/login', params, {headers: this.headersVariable});
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

}
