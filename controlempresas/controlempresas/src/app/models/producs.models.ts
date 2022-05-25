export class ProductosS{

    constructor(
       public _id: String,
       public nombre: String,
       public precioUnitario: String,
       public stock: Number,
       public ventas: {type: Number, default: 0}
    ){}

}