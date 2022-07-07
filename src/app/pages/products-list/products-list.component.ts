import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/models/Product'
import { ProductService } from 'src/app/services/product.services'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: [],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = []
  constructor(private _service: ProductService) {}

  ngOnInit(): void {
    this._service.getProducts().subscribe({
      next: (response: Product[]) => {
        this.products = response
      },
      error: (error: any) =>
        console.error('Não foi possível obter a lista de produtos: ' + error),
    })
  }

  delete(id) {
    this._service.deletProduct(id).subscribe({
      next: (response) => {
        console.log(response);
        this.products = this.products.filter((x) => x.id != id)
      },
      error: (error: any) =>
        console.error('Não foi possível apagar produto: ' + error),
    })
  }
}
