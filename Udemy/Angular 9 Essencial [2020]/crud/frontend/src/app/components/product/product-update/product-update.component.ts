
/**
    * @description      : 
    * @author           : Keeggo
    * @group            : 
    * @created          : 16/10/2021 - 20:35:45
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/10/2021
    * - Author          : Keeggo
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(
      product => {
        this.product = product
      }
    );
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso');

      setTimeout(() => {
        this.router.navigate(['/products']);
      }, 3000);
    })
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }

}
