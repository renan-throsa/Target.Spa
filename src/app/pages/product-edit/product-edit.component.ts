import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/models/Product'
import { ProductService } from 'src/app/services/product.services'
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styles: [],
})
export class ProductEditComponent implements OnInit {
  product: Product
  entryForm: FormGroup

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: ProductService,
    private _fb: FormBuilder,
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

    let id
    this._route.params.subscribe((parms) => (id = parms['id']))
    this._service.getProduct(id).subscribe({
      next: (response: Product) => {
        this.product = response
        this.entryForm.patchValue({ description: this.product.description });
        this.entryForm.patchValue({ purchasePrice: this.product.purchasePrice });
        this.entryForm.patchValue({ salePrice: this.product.salePrice });
        this.entryForm.patchValue({ code: this.product.code });
        this.entryForm.patchValue({ quantity: this.product.quantity });
        this.entryForm.patchValue({ minimumQuantity: this.product.minimumQuantity });
      },
      error: (error: any) =>
        console.error('Não foi possível obter o produto: ' + error),
    })
  }

  editProduct() {
    this.product = Object.assign({}, this.product, this.entryForm.value)
    console.log(this.product)
    this._service.updateProduct(this.product).subscribe({
      next: () => {
        this._router.navigate(['/produtos'])
      },
      error: (error: any) =>
        console.error('Não foi possível editar o produto: ' + error),
    })
  }
}
