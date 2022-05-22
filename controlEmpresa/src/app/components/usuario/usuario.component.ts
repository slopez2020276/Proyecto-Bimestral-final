import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { switchAll } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';
import Swal from 'sweetalert2';


@Component({

  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public users: Array<Usuario> = [];
  public user: Usuario;
  public search =  "";

  constructor(private sUsuario: UsuarioServicesService ) {
    this.user = new Usuario("","","","","",0,"","",[],[]);
   }

  ngOnInit(): void {
    this.sUsuario.ObtenerEmpresa().subscribe((response:any)=>{
      if(response.users){
        this.users= response.users;
        localStorage.setItem("Empresas",JSON.stringify(response.users));
      }else{
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: response.message
        })
      }
    },
    (error)=>{
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: error.error.message
      })
    })
}

onSubmit(companyForm: NgForm){
  let user: any = this.user;
  this.sUsuario.crearEmpresa(user).subscribe((resp:any)=>{
    if(resp.userSaved){
      companyForm.reset();
      this.users.push(resp.userSaved);
      localStorage.setItem("companys",JSON.stringify(this.users));
      Swal.fire({
        icon: 'success',
        title: 'Empresa creada exitosamente'
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: resp.message
      })
    }
  },
  (error)=>{
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: error.error.message
    })
  })
}

updateCompany(updateCompanyForm: NgForm){
  let user: any = this.user;
  delete user.password;
  this.sUsuario.ActualizarEmpresa(user).subscribe((resp:any)=>{
    if(resp.userUpdated){
      updateCompanyForm.reset();
      this.user = new Usuario("","","","","",0,"","",[],[]);
      Swal.fire({
        icon: 'success',
        title: 'Empresa actualizada exitosamente'
      })
      this.ngOnInit();
    }else{
      Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: resp.message
      })
    }
  },
  (error)=>{
    Swal.fire({
      icon: 'error',
      title: '¡Ups!',
      text: error.error.message
    })
  })
}
deleteCompanyInfo(){
  this.user =  new Usuario("","","","","",0,"","",[],[]);
}

setCompanyInfo(user: any){
  this.user = user;
}

deleteCompany(book: any){
  this.setCompanyInfo(book);
  let userToDelete:any = this.user;
  Swal.fire({
    title: "¿Eliminar empresa " + userToDelete.name + " ?" ,
    text: "Esta acción no se puede remover",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  })
  .then(resultado => {
      if (resultado.value) {
        this.sUsuario.eliminarEmpresa(this.user).subscribe((resp:any)=>{
          if(resp.userRemoved){
            Swal.fire({
              icon: 'success',
              title: 'Empresa eliminada exitosamente'
            })
            this.ngOnInit();
            this.deleteCompanyInfo();
          }else{
            Swal.fire({
              icon: 'error',
              title: '¡Ups!',
              text: resp.message
            })
          }
        },
         (error:any)=>{
          Swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: error.error.message
          })
        })
      }else {
        this.deleteCompanyInfo();
      }
  });
}

ngDoCheck(){
  this.users = JSON.parse(localStorage.getItem("Empresa")!);
}


}
