export class Usuario {
  constructor(
      public _id: string,
      public nombre: string,
      public username: string,
      public password: string,
      public direccion: string,
      public Numero: Number,
      public rol: string,
      public descripcion : string,
      public Sucursales: [],
      public products: []
  ){}
}
