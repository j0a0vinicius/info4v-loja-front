import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'produto/:id', component: ProdutoDetalhe }

];
