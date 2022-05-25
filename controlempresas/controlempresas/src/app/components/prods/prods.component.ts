import { Component, OnInit } from '@angular/core';
import { ProductosS } from 'src/app/models/producs.models';
import { ProdsService } from 'src/app/services/prods.service';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.scss'],
  providers: [ProdsService]
})
export class ProdsComponent implements OnInit {

  public prodSModelGet: ProductosS;
  public prodSModelPost: ProductosS;
  public prodSModelGetId: ProductosS;
  public token;

  constructor( 
    public sProdS: ProdsService
             ) {
              this.prodSModelPost = new ProductosS(
                '',
                '',
                '',
                0,
                {type: new Number, default: 0}
              );

              this.prodSModelGetId = new ProductosS(
                '',
                '',
                '',
                0,
                {type: new Number, default: 0}
              );

              this.token = this.sProdS.getToken();
                
            }

  ngOnInit(): void {
    this.getProdS();
  }

  getProdS() {
    this.sProdS.obtenerProdS(this.token).subscribe(
      (response) => {
        this.prodSModelGet = response.productos;
        console.log(response);
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

putProductosS() {
    this.sProdS.editarProdS(this.prodSModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getProdS()
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteProductosS(id) {
    this.sProdS.eliminarProdS(this.prodSModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getProdS()
      },
      (err) => {
        console.log(err);
      }
    )
  }

  ventas(){
    this.sProdS.ventasP(this.prodSModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getProdS()
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getProductosSId(idProductosS){
    this.sProdS.obtenerProdSId(idProductosS, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.prodSModelGetId = response.usuario;
      },
      (error)=>{

      }
    )
  }

}
