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

  //variables
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
    private sempresaService: EmpresaService,
    private susuarioService: UsuarioService,
    private ssucursalesService: SucursalesService,
    private router: Router
             ) {
              this.empresasModelPost = new Empresas(
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
              this.token = this.susuarioService.getToken();

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
  }

  getEmpresa() {
    this.sempresaService.obtenerEmpresas(this.token).subscribe(
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
    this.sempresaService.agregarEmpresa(this.empresasModelPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getEmpresa();
        this.empresasModelPost.nombre = "";
        this.empresasModelPost.direccion = "";
        this.empresasModelPost.descripcion = "";
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

  //productos

  getProductos() {
    this.sempresaService.obtenerProductos(this.token).subscribe(
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
    this.sempresaService.agregarProductos(this.productosModelPost, this.token).subscribe(
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
    this.sempresaService.editarProducto(this.productosModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getProductos();
      },
      (error) => {
      }
    )
  }

  deleteProducto(id) {
    this.sempresaService.eliminarProducto(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getProductos();
      }
    )
  }

  getProductoId(idProducto){
    this.sempresaService.obtenerProductosById(idProducto, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.productosModelGetId = response.productos;
      },
      (error)=>{

      }
    )
  }

  postAgregarProd(idProducto){
    this.sempresaService.obtenerProductosById(idProducto, this.token).subscribe(
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
    this.ssucursalesService.obtenerSucursales(this.token).subscribe(
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

    this.sempresaService.agregarProductoaSucursal(this.productosModelGetId, this.token, this.getIdSucursal, this.productosModelGetId._id).subscribe(

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
