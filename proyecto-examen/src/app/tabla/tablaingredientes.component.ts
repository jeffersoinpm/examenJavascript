import {Component, Input, OnInit} from '@angular/core';
import {Ingrediente} from "../ingrediente";

@Component({
  selector: 'app-tabla-ingredientes',
  templateUrl: './tablaingredientes.component.html',
  styleUrls: ['./tablaingredientes.component.css']
})
export class TablaingredientesComponent implements OnInit {

  @Input() datosTablaIngredientes: Ingrediente[] = [];

  constructor() {
  }

  ngOnInit() {
  }
}
