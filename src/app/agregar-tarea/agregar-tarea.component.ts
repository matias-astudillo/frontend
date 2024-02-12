import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';
import { Modelo } from '../modelo';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent {
  modelo: Modelo = {} as Modelo;

  constructor(private tareasService: TareasService) {}

  agregarTarea() {
    console.log("hola")
    console.log('Datos a enviar al backend:', this.modelo);
    this.tareasService.agregarTarea(this.modelo).subscribe(() => {
      console.log('Datos a enviar al backend:', this.modelo);
      this.modelo = {} as Modelo; // Reinicia el modelo después de agregar la tarea
    });
  }
}