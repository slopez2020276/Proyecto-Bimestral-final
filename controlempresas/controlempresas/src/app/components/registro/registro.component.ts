import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [UsuarioService]
})
export class RegistroComponent implements OnInit {
  user;
  repeatPass:string = '';

  constructor(private userRest: UsuarioService,
    private router: Router) { 
      this.user = new Usuario(
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

  checkPass(){
    let validate: boolean = false;
    if(this.repeatPass != this.user.password){
      return validate = false;
    }else{
      return validate = true;
    }
  }

register(){

  if(this.checkPass()=== true){

    this.userRest.register(this.user).subscribe({
      next: (response:any)=>{
        alert("Usuario creado satisfactoriamente, usuario: " + response.usuario.nombre);
        this.router.navigate(['/login']);
      },
      error: (err)=> console.log(err.error.mensaje)
    });
  } else{
    alert('La contraseña no coincide :(')
  }

}

}
