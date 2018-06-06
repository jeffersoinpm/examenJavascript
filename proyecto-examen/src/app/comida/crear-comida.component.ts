import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Comida} from "../comida";

@Component({
  selector: 'app-crear-comida',
  templateUrl: './crear-comida.component.html',
  styleUrls: ['./crear-comida.component.css']
})
export class CrearComidaComponent implements OnInit {

  @Output() comidaCreada: EventEmitter<Comida> = new EventEmitter<Comida>();
  comida: Comida;

  constructor() {
    this.comida =  new Comida();
    this.comida.ingredientes =  [];
  }

  ngOnInit() {
  }

  guardarComida() {
    //console.log(JSON.stringify(this.comida));
    this.comidaCreada.emit(this.comida);
    this.comida = new Comida();
    this.comida.ingredientes =  [];
  }
}
