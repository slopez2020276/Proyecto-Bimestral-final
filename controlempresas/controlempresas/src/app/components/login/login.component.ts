import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarioModelLogin: Usuario;

  constructor(private usuarioService: UsuarioService, private sRouter: Router) {
    this.usuarioModelLogin = new Usuario(
      "",
      "",
      "",
      "",
      "",
      0,
      "",
      "",
      [],
      []
    );
   }

  ngOnInit(): void {
  }

  getToken(){
    this.usuarioService.login(this.usuarioModelLogin, "true").subscribe(
      (response)=>{
        console.log(response.token);
        localStorage.setItem('token', response.token);
      },
      (error)=>{
        console.log(<any> error);
      }
    );
  }

  getTokenPromesa(): Promise<any> {
    return new Promise((resolve, reject)=>{
      this.usuarioService.login(this.usuarioModelLogin, "true").subscribe(
        (response)=>{
          localStorage.setItem("token", response.token)
          resolve(response);
        },
        (error)=>{
          console.log(<any>error);

        }
      )
    })
  }

login(){
    this.usuarioService.login(this.usuarioModelLogin).subscribe(
      (response)=>{

        this.getTokenPromesa().then(respuesta => {
          console.log(respuesta);
          localStorage.setItem('identidad', JSON.stringify(response.usuario))

          this.sRouter.navigate(['/prode']);
        })
      },
      (error)=>{
        console.log(<any>error);
      }
    );
  }

}
