import {Component} from '@angular/core';
import {Comida} from "./comida";
import {Ingrediente} from "./ingrediente";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arregloComidas: Comida[] = [];
  comidaSeleccionada: Comida;


  constructor() {
    this.comidaSeleccionada = new Comida();
    this.comidaSeleccionada.ingredientes = [];
  }

  agregarComida(comida) {
    this.arregloComidas.push(comida);
  }

  agregarIngrediente(ingrediente) {
    this.comidaSeleccionada.ingredientes.push(ingrediente);
  }

  seleccionarComida(comida) {
    this.comidaSeleccionada = new Comida();
    this.comidaSeleccionada = comida;
  }
}
