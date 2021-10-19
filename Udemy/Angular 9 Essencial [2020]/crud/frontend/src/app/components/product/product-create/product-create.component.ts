import { Product } from './../product.model';
import { ProductService } from './../../product/product.service';
/**
    * @description      : 
    * @author           : Keeggo
    * @group            : 
    * @created          : 08/10/2021 - 21:30:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/10/2021
    * - Author          : Keeggo
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null
  }

  atributoTeste = "Testando binding";

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto Criado...")
      this.router.navigate(['/products'])
    })
  }

  consulta() {
    this.productService.consulta().subscribe((obj) => {
      console.log(obj);
    });
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
