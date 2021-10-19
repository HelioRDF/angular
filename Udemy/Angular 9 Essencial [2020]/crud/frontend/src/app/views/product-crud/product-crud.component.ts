import { HeaderService } from './../../components/template/header/header.service';
/**
    * @description      : 
    * @author           : Keeggo
    * @group            : 
    * @created          : 08/10/2021 - 21:44:08
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/10/2021
    * - Author          : Keeggo
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService:HeaderService ) { 
    headerService.headerData= {
      title:"Cadastro de Produtos",
      icon:'storefront',
      routerUrl:'/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    console.log('Navegando...')
    this.router.navigate(['/products/create'])
  }

}
