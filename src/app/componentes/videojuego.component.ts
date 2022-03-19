import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/entidades/videojuego';

@Component({
  selector: 'app-componentes',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit {

  cabecera : string;
  arrayVideojuegos : Videojuego[] = [];
  videojuego!: Videojuego;

  id : number = 0;
  titulo : string = "";
  compania : string = "";
  valoracion : number = 0.0;

  deshabilitarInsertar = false; 
  deshabilitarModificar_Borrar = true;
  deshabilitarID = true;
  tituloObligatorioOculto = true;
  companiaObligatorioOculto = true;
  valoracionObligatorioOculto = true;

  constructor() { 
    this.cabecera = "DAO de Videojuegos de Jorge Pando"
    let videojuego : Videojuego = new Videojuego("The Last of Us", "Naughty Dog", 10.0);
    this.arrayVideojuegos.push(videojuego)
    videojuego = new Videojuego("Red Dead Redemption II", "Rockstar Games", 9.9);
    this.arrayVideojuegos.push(videojuego)
  }

  ngOnInit() {
  }

  public insertar() {
    if(!this.erroresFormulario()){
      this.videojuego = new Videojuego(this.titulo, this.compania, this.valoracion)
      console.log(`Insertando Videojuego: ${this.videojuego.toString()}`)
      this.arrayVideojuegos.push(this.videojuego)
      this.vaciar()
      console.log("Videojuego Insertado")
    }
  }

  public erroresFormulario() : boolean {
    let error : boolean = false;
    this.tituloObligatorioOculto = true;
    this.companiaObligatorioOculto = true;
    this.valoracionObligatorioOculto = true;

    if(this.titulo.trim().length == 0) {
      error = true;
      this.tituloObligatorioOculto = false;
    } 
    if(this.compania.trim().length == 0) {
      error = true;
      this.companiaObligatorioOculto = false;
    }
    if(this.valoracion == null) {
      error = true;
      this.valoracionObligatorioOculto = false;
    }
    return error;
  }

  public modificar() {
    if(!this.erroresFormulario()) {
      for(let i = 0; i <= this.arrayVideojuegos.length; i++) {
        let vAux : Videojuego = this.arrayVideojuegos[i]
        if(vAux.id == this.id) {
          this.arrayVideojuegos[i].titulo = this.titulo
          this.arrayVideojuegos[i].compania = this.compania
          this.arrayVideojuegos[i].valoracion = this.valoracion
          break
        }
      }
      console.log("Modificando videojuego...")
      this.vaciar()
    }
  }

  public eliminar() {
    for(let i = 0; i <= this.arrayVideojuegos.length; i++) {
      let vAux : Videojuego = this.arrayVideojuegos[i]
      if(vAux.id == this.id) {
        this.arrayVideojuegos.splice(i, 1)
        break
      }
    }
    console.log("Eliminando videojuego...")
    this.vaciar()
  }

  public vaciar() {
    this.id = 0
    this.titulo = ""
    this.compania = ""
    this.valoracion = 0.0
    this.deshabilitarInsertar = false
    this.deshabilitarModificar_Borrar = true
    console.log("Vaciando campo de formulario")
    this.ocultarMensajesError()
  }

  public ocultarMensajesError() {
    this.tituloObligatorioOculto = true;
    this.companiaObligatorioOculto = true;
    this.valoracionObligatorioOculto = true;
  }

  public consultar(v : Videojuego) : void {
    console.log("Consultando videojuego...")
    this.ocultarMensajesError()

    this.id = v.id
    this.titulo = v.titulo
    this.compania = v.compania
    this.valoracion = v.valoracion

    this.deshabilitarInsertar = true
    this.deshabilitarModificar_Borrar = false
  }

}