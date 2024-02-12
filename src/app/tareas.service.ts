import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modelo } from './modelo'; // Asegúrate de tener el modelo definido

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private baseUrl = 'http://localhost:8080/tareas'; // Aquí debes especificar la URL base de tu backend

  constructor(private http: HttpClient) { }

  obtenerTodasLasTareas(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(this.baseUrl);
  }

  agregarTarea(modelo: Modelo): Observable<any> {
    return this.http.post(this.baseUrl, modelo);
  }

  obtenerTareaPorId(id: number): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(`${this.baseUrl}/${id}`);
  }

  actualizarEstado(id: number, completado: boolean): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, completado);
  }

  eliminarTarea(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}