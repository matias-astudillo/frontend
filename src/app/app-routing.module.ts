import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

const routes: Routes = [
  { path: 'lista-tareas', component: ListaTareasComponent },
  { path: '', redirectTo: '/lista-tareas', pathMatch: 'full' }, // Redirecciona a lista-tareas por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
