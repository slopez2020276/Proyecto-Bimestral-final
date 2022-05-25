import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosS } from 'src/app/models/producs.models';
import { Sucursales } from 'src/app/models/sucursales.models';
import { ProdsService } from 'src/app/services/prods.service';
import {SucursalesService } from 'src/app/services/sucursales.service'

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss']
})
export class SucursalesComponent implements OnInit {

  public empresasModelGet: Sucursales;
  public empresasModelPost: Sucursales;
  public empresasModelGetId: Sucursales;
  public productosSucModel: ProductosS;
  public token;

  constructor(
    public sSucursales: SucursalesService,
    public sProdSuc: ProdsService,
    private _router: Router
             ) {
              this.empresasModelPost = new Sucursales(
                '',
                '',
                '',
                0,
                []
              );

                this.productosSucModel = new ProductosS(
                  '',
                  '',
                  '',
                  0,
                  {type: new Number, default: 0}
                )

              this.empresasModelGetId = new Sucursales(
                '',
                '',
                '',
                0,
                []
              );

              this.token = this.sSucursales.getToken();

            }

  ngOnInit(): void {
    this.getSucursal();
  }

  getSucursal() {
    this.sSucursales.obtenerSucursal(this.token).subscribe(
      (response) => {
        this.empresasModelGet = response.sucursales;
        console.log(response);
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

postEmpresa() {
    this.sSucursales.agregarSucursal( this.empresasModelPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getSucursal();
        this.empresasModelPost.nombreSucursal = "";
        this.empresasModelPost.direccionSucursal = "";
        this.empresasModelPost.numero = 0;

      },
      (err) => {
        console.log(<any>err);
      }
    )
  }

  putEmpresa() {
    this.sSucursales.editarSucursal(this.empresasModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getSucursal()
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteSucursal(id) {
    this.sSucursales.eliminarSucursal(this.empresasModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getSucursal()
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getSucursalesId(idEmpresa){
    this.sSucursales.obtenerSucursalId(idEmpresa, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.empresasModelGetId = response.usuario;
      },
      (error)=>{
        
      }
    )
  }

  putPSucursal() {
    this.sProdSuc.agregarProdS( this.productosSucModel, this.empresasModelGetId._id ,this.token).subscribe(
      (response) => {
        this.getSucursal();
        this.productosSucModel.nombre = "";
        this.productosSucModel.precioUnitario = "";
        this.productosSucModel.stock = 0;
      },
      (err) => {
        console.log(err);
      }
    )
}

  }
