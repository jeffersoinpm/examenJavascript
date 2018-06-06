import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CrearComidaComponent } from './comida/crear-comida.component';
import {MatInputModule,MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CrearIngredienteComponent } from './ingrediente/crear-ingrediente.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { TablaingredientesComponent } from './tabla/tablaingredientes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CrearComidaComponent,
    CrearIngredienteComponent,
    TablaingredientesComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
