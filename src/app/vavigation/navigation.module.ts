import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FooterComponent } from './footer/footer.component'
import { MenuComponent } from './menu/menu.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ProductsListComponent } from '../pages/products-list/products-list.component'
import { ProductAddComponent } from '../pages/product-add/product-add.component'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProductEditComponent } from '../pages/product-edit/product-edit.component'

@NgModule({
  declarations: [
    FooterComponent,
    ProductsListComponent,
    ProductAddComponent,
    ProductEditComponent,
    MenuComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    FooterComponent,
    ProductsListComponent,
    MenuComponent,
    NotFoundComponent,
  ],
})
export class NavigationModule {}
