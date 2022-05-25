import { Component, OnInit } from '@angular/core';
import { ProductosE } from 'src/app/models/productos.models';
import { ProdeService } from 'src/app/services/prode.service';

@Component({
  selector: 'app-prode',
  templateUrl:  './prode.component.html',
  styleUrls: ['./prode.component.scss'],
  providers: [ProdeService]
})
export class ProdeComponent implements OnInit {

  public prodEModelGet: ProductosE;
  public prodEModelPost: ProductosE;
  public prodEModelGetId: ProductosE;
  public token;

  constructor( 
    public sProdE: ProdeService
             ) {
              this.prodEModelPost = new ProductosE(
                '',
                '',
                '',
                0
              );

              this.prodEModelGetId = new ProductosE(
                '',
                '',
                '',
                0
              );

              this.token = this.sProdE.getToken();
   
            }

  ngOnInit(): void {
    this.getProdE();
  }

  getProdE() {
    this.sProdE.obtenerProdE(this.token).subscribe(
      (response) => {
        this.prodEModelGet = response.productos;
        console.log(response);
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

putPEmpresa() {
    this.sProdE.agregarProdE( this.prodEModelPost, this.token).subscribe(
      (response) => {
        this.getProdE();
        this.prodEModelPost.nombre = "";
        this.prodEModelPost.proveedor = "";
        this.prodEModelPost.stock = 0;
      },
      (err) => {
        console.log(<any>err);
      }
    )
}

putProductos() {
    this.sProdE.editarProdE(this.prodEModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getProdE()
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteProductos(id) {
    this.sProdE.eliminarProdE(this.prodEModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getProdE()
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getProductosId(idProductos){
    this.sProdE.obtenerProdEId(idProductos, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.prodEModelGetId = response.usuario;
      },
      (error)=>{

      }
    )
  }

}

