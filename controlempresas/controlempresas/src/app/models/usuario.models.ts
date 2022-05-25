export class Usuario {
  constructor(
    public _id: String,
    public nombre: String,
    public username: String,
    public password: String,
    public direccion: String,
    public numero: Number,
    public rol: String,
    public descripcion:String,
    public sucursales: [],
    public productos: []
  ){}
}