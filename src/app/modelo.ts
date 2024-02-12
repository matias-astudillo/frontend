export class Modelo {
    id: number;
  nombre: string;
  completado: boolean;
  
  constructor(id: number, nombre: string, completado: boolean) {
    this.id = id;
    this.nombre = nombre;
    this.completado = completado;
  }
}
