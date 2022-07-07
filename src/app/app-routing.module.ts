import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductAddComponent } from './pages/product-add/product-add.component'
import { ProductEditComponent } from './pages/product-edit/product-edit.component'
import { ProductsListComponent } from './pages/products-list/products-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/produtos',
    pathMatch: 'full',
  },
  {
    path: 'produtos',
    component: ProductsListComponent,
  },
  {
    path: 'produtos/produto/add',
    component: ProductAddComponent,
  },
  {
    path: 'produtos/produto/edit/:id',
    component: ProductEditComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
