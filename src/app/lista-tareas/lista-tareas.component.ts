import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { Modelo } from '../modelo';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  tareas: Modelo[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    this.obtenerTodasLasTareas();
  }

  obtenerTodasLasTareas() {
    this.tareasService.obtenerTodasLasTareas().subscribe(tareas => {
      this.tareas = tareas;
      console.log(tareas)
    });
    
  }

  eliminarTarea(id: number) {
    this.tareasService.eliminarTarea(id).subscribe(() => {
      this.obtenerTodasLasTareas();
    });
  }
}