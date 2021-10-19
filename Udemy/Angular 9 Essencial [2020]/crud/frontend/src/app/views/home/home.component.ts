/**
    * @description      : 
    * @author           : Keeggo
    * @group            : 
    * @created          : 16/10/2021 - 23:51:38
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/10/2021
    * - Author          : Keeggo
    * - Modification    : 
**/
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService:HeaderService) {
    headerService.headerData= {
      title:"Inicio",
      icon:'home',
      routerUrl:'/'
    }

   }

  ngOnInit(): void {
  }

}
