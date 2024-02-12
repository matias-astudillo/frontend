import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from '../tareas.service';
import { Modelo } from '../modelo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit {
  modelo!: Modelo;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tareasService: TareasService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.obtenerTarea();
  }

  obtenerTarea(): void {
    this.tareasService.obtenerTareaPorId(this.id).subscribe(tareas => {
      if (tareas.length > 0) {
        this.modelo = tareas[0];
      } else {
        // Manejar el caso en que no se encuentre ninguna tarea con el ID proporcionado
      }
    });
  }

  actualizarEstado(): void {
    this.tareasService.actualizarEstado(this.id, this.modelo.completado).subscribe(() => {
      console.log('Estado de tarea actualizado correctamente');
      this.router.navigate(['/lista-tareas']); // Redirigir a la lista de tareas
    }, error => {
      console.error('Error al actualizar estado de tarea:', error);
    });
  }
}
