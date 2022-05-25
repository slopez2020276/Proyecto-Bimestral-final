import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.models';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [UsuarioService]
})

export class EmpresaComponent implements OnInit {

  public empresasModelGet: Usuario;
  public empresasModelPost: Usuario;
  public empresasModelGetId: Usuario;
  public token;

  constructor( 
    public sUsuario: UsuarioService,
    private _sucursaleS: SucursalesService,
    private _router: Router
             ) {
              this.empresasModelPost = new Usuario(
                '',
                '',
                '',
                '',
                '',
                0,
                '',
                '',
                [],
                []
              );

              this.empresasModelGetId = new Usuario(
                '',
                '',
                '',
                '',
                '',
                0,
                '',
                '',
                [],
                []
              );

              this.token = this.sUsuario.getToken();
   
            }

  ngOnInit(): void {
    this.getEmpresa();
  }

  getEmpresa() {
    this.sUsuario.obtenerEmpresa(this.token).subscribe(
      (response) => {
        this.empresasModelGet = response.users;
        console.log(response);
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

postEmpresa() {
    this.sUsuario.agregarEmpresa( this.empresasModelPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getEmpresa();
        this.empresasModelPost.nombre = "";
        this.empresasModelPost.direccion = "";
        this.empresasModelPost.descripcion = "";
        this.empresasModelPost.password = "";
        this.empresasModelPost.numero = 0;
        this.empresasModelPost.username = ""
      },
      (err) => {
        console.log(<any>err);
      }
    )
  }

  putEmpresa() {
    this.sUsuario.editarEmpresa(this.empresasModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getEmpresa()
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteEmpresa(id) {
    this.sUsuario.eliminarEmpresa(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getEmpresa()
      },
      (err) => {
        
      }
    )
  }

  getEmpresasId(idEmpresa){
    this.sUsuario.obtenerEmpresaId(idEmpresa, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.empresasModelGetId = response.usuario;
      },
      (error)=>{

      }
    )
  }

}
