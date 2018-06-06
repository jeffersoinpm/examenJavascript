import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingrediente} from "../ingrediente";

@Component({
  selector: 'app-crear-ingrediente',
  templateUrl: './crear-ingrediente.component.html',
  styleUrls: ['./crear-ingrediente.component.css']
})
export class CrearIngredienteComponent implements OnInit {

  @Output() ingredienteCreado: EventEmitter<Ingrediente> = new EventEmitter<Ingrediente>();
  ingrediente: Ingrediente;

  constructor() {
    this.ingrediente = new Ingrediente();
  }

  ngOnInit() {
  }

  guardarIngrediente() {
    this.ingredienteCreado.emit(this.ingrediente);
    this.ingrediente = new Ingrediente();
  }

}
