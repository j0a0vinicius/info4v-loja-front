import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'produto/:id', component: ProdutoDetalheComponent }
];
