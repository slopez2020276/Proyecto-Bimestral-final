export class Product {
  constructor(
      public _id: string,
      public nombre: string,
      public precioUnitario: Number,
      public stock: Number,
      public ventas: Number,
  ){}
}
