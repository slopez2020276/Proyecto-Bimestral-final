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
  public usuarioModelLogin: Usuario;

  constructor(private usuarioService: UsuarioService) {
    this.usuarioModelLogin = new Usuario(
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

  login(){
    this.usuarioService.login(this.usuarioModelLogin).subscribe(
      (response)=>{
        console.log(response.usuario);
        localStorage.setItem('ideantidad', JSON.stringify(response.usuario));
        this.getToken();
    },(error)=>{
      console.log(<any> error);
    }
    )
  }

}
