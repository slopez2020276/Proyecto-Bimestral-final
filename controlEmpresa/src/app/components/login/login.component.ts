import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: Usuario;
  public userLogged: any;



  constructor(private sUsuario : UsuarioServicesService, private router: Router) {
    this.user = new Usuario("","","","","",0,"","",[],[]);

  }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm){
    this.sUsuario.login(this.user).subscribe((res:any) => {
      if(res.token){

        delete res.user.password;

        this.userLogged = JSON.stringify(res.user);

        localStorage.setItem("token",res.token);
        localStorage.setItem("identidad", this.userLogged);

        Swal.fire({
          icon: 'success',
          title: '¡Bienvenido!',
          text: "Usuario logeado exitosamente exitosamente"
        })
        this.router.navigateByUrl('home');
      }else{
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: res.message
        })
      }
    },
    (error:any) =>
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: error.error.message
      })
    )
  }


}
