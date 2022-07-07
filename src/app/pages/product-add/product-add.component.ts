import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/models/Product'
import { ProductService } from 'src/app/services/product.services'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styles: [],
})
export class ProductAddComponent implements OnInit {
  product: Product;
  entryForm: FormGroup;
  
  constructor(
    private _service: ProductService,
    private _fb: FormBuilder,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.entryForm = this._fb.group({
      purchasePrice: ['', Validators.required],
      salePrice: ['', [Validators.required]],
      description: ['', [Validators.required]],
      code: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      minimumQuantity: ['', [Validators.required]],
    })
  }

  addProduct() {
    this.product = Object.assign({}, this.product, this.entryForm.value)    
    this._service.addProduct(this.product).subscribe({
      next: () => {
        this._router.navigate(['/produtos'])
      },
      error: (error: any) =>
        console.error('Não foi possível adicionar o produtos: ' + error),
    })
  }
}
