import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public UsuarioModelLogin: Usuario;

  constructor(private susuarioService: UsuarioService) {
    this.UsuarioModelLogin = new Usuario(
      "",
      "",
      "",
      "",
      ""
    );
   }

  ngOnInit(): void {
  }

  getToken(){
    this.susuarioService.login(this.UsuarioModelLogin, "true").subscribe(
      (response)=>{
        console.log(response.token);
        localStorage.setItem("token", response.token)
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

  login(){
    this.susuarioService.login(this.UsuarioModelLogin).subscribe(
      (response)=>{
        console.log(response.usuario);
        localStorage.setItem('identidad', JSON.stringify(response.usuario));
        this.getToken();
        

    },(error)=>{
      console.log(<any> error);
    }
    )
  }

}
