import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicesService {
  // varibles
  public uri: string = 'http://localhost:3200/api/';
  public user:any;
  public token:any;
  public role:any;
  public username:any;

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public httpOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  };

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  // variables


  constructor(private http: HttpClient) {
     this.uri = this.uri;
   }


   getToken(){
    let token = localStorage.getItem('token')!;
    this.token = token;

    return token;
  }

  login(user: any){
    user.gettoken = "true";
    let params = JSON.stringify(user);
    return this.http.post<any>(`${this.uri}login`, params, this.httpOptions).pipe(map(this.extractData))
  }

  crearEmpresa(user: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    let params = JSON.stringify(user);
    return this.http.post<any>(`${this.uri}crearEmpresa`, params, {headers: headers}).pipe(map(this.extractData))
  }

  ObtenerEmpresa(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get<any>(`${this.uri}obtenerEmpresas`, {headers: headers}).pipe(map(this.extractData))
  }

  ActualizarEmpresa(user: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    let params = JSON.stringify(user);
    return this.http.put<any>(`${this.uri}editarEmpresa/${user._id}`, params, {headers: headers}).pipe(map(this.extractData))
  }

  eliminarEmpresa(user: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.delete<any>(`${this.uri}removeCompany/${user._id}`, {headers: headers}).pipe(map(this.extractData))
  }



}
