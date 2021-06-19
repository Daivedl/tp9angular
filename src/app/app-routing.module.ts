import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { WhereComponent } from './components/where/where.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'productos', component: ProductosComponent },
  { path: 'where' , component: WhereComponent},
  { path: 'detalle/:id', component: DetalleProductoComponent},
  { path: 'buscar/:termino', component: BuscadorComponent},
  { path: '**' , pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
