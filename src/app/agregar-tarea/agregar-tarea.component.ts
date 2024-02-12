import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TareasService } from '../tareas.service';
import { Modelo } from '../modelo';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent {
  modelo: Modelo = {} as Modelo;

  constructor(private router: Router, private tareasService: TareasService) {}

  agregarTarea() {
    if (this.modelo.completado == null) {
      this.modelo.completado = false;
    }
    
    this.tareasService.agregarTarea(this.modelo).subscribe(() => { 
      // Reinicia el modelo después de agregar la tarea
      this.modelo = {} as Modelo;
      
      // Redirecciona a la lista de tareas
      this.router.navigate(['/lista-tareas']);
    });
  }
}