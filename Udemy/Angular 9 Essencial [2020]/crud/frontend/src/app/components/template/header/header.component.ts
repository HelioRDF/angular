/**
    * @description      : 
    * @author           : Keeggo
    * @group            : 
    * @created          : 16/10/2021 - 23:46:35
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/10/2021
    * - Author          : Keeggo
    * - Modification    : 
**/
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }
  get title(): string {
    return this.headerService.headerData.title
  }
  get icon(): string {
    return this.headerService.headerData.icon
  }
  get routeUrl(): string {
    return this.headerService.headerData.routerUrl
  }
}
