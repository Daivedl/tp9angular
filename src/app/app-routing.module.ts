import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { WhereComponent } from './components/where/where.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'where' , component: WhereComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
