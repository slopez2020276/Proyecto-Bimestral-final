import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresas } from 'src/app/models/empresas.models';
import { Productos } from 'src/app/models/productos.models';
import { Sucursales } from 'src/app/models/sucursales.models';
import { EmpresaService } from 'src/app/services/empresa.service';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [EmpresaService]
})

export class EmpresaComponent implements OnInit {

  public empresasModelGet: Empresas;
  public empresasModelPost: Empresas;
  public token;
  public empresaProdModelGet: Empresas;
  public productosModelPost: Productos;
  public productosModelGetId: Productos;
  public producModelId: Productos;
  public sucursalModelGet: Sucursales;
  public SucursalId: String;

  constructor( 
    private _empresaS: EmpresaService,
    private _usuarioS: UsuarioService,
    private _sucursaleS: SucursalesService,
    private _router: Router
             ) {
              this.empresasModelPost = new Empresas(
                '',
                '',
                '',
                '',
                '',
                [{
                  nombreProducto: '',
                  precioProducto: 0,
                  stock: 0
                }]
              )

              this.token = this._usuarioS.getToken();

              this.productosModelPost = new Productos(
                '',
                '',
                0,
                0
              )
              this.productosModelGetId = new Productos(
                '',
                '',
                0,
                0
              )
              this.producModelId = new Productos(
                '',
                '',
                0,
                0
              )    
            }

  ngOnInit(): void {
    //this.getProductos();
  }

  getEmpresa() {
    this._empresaS.obtenerEmpresas(this.token).subscribe(
      (response) => {
        this.empresasModelGet = response.empresa;
        console.log(response.empresasModelGet);
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

postEmpresa() {
    this._empresaS.agregarEmpresa(this.empresasModelPost, this._usuarioS.getToken).subscribe(
      (response) => {
        console.log(response);
        this.getEmpresa();
        this.empresasModelPost.nombre = "";
        this.empresasModelPost.direccion = "";
        this.empresasModelPost.descripcion = "";
        this.empresasModelPost.password = "";
      },
      (err) => {
        console.log(<any>err);
      }
    )
  }

  //productos

  getProductos() {
    this._empresaS.obtenerProductos(this.token).subscribe(
      (response) => {
        console.log(response.productos);
        this.empresaProdModelGet = response.productos
      },
      (err) => {
        console.log('Hubo un error');
      }
    )
  }

  postProductos() {
    this._empresaS.agregarProductos(this.productosModelPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getProductos();
        this.productosModelPost.nombreProducto = "";
        this.productosModelPost.precioProducto = 0;
        this.productosModelPost.stock = 0;
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

putProductos() {
    this._empresaS.editarProducto(this.productosModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getProductos();
      },
      (error) => {
      }
    )
  }

  deleteProducto(id) {
    this._empresaS.eliminarProducto(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getProductos();
      }
    )
  }

  getProductoId(idProducto){
    this._empresaS.obtenerProductosById(idProducto, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.productosModelGetId = response.productos;
      },
      (error)=>{

      }
    )
  }

  postAgregarProd(idProducto){
    this._empresaS.obtenerProductosById(idProducto, this.token).subscribe(
      (response) => {
        console.log(response);
        this.productosModelGetId = response.productos;
      },
      (err) => {
        console.log('Hubo un error');

      }

    )

  }

getSucursales(){
    this._sucursaleS.obtenerSucursales(this.token).subscribe(
      (response) => {
        this.sucursalModelGet = response.sucursales;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);

      }
    )
  }

getIdSucursal(idSucursal, stock){
    this.getIdSucursal = idSucursal
    console.log(this.getIdSucursal);
}

agregarProd(){
    console.log(this.getIdSucursal);

    this._empresaS.agregarProductoaSucursal(this.productosModelGetId, this.token, this.getIdSucursal, this.productosModelGetId._id).subscribe(

      (response) => {

        console.log(response);
        this.productosModelGetId.nombreProducto = "";
        this.productosModelGetId.precioProducto = 0;
        this.productosModelGetId.stock = 0;
      },
      (err) => {

        console.log('Hubo un error');

      }

    )
  }
}
