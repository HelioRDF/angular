/**
    * @description      : 
    * @author           : Keeggo
    * @group            : 
    * @created          : 16/10/2021 - 23:41:04
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/10/2021
    * - Author          : Keeggo
    * - Modification    : 
**/
import { HeaderData } from './header-data-model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'home',
    routerUrl: ''
  })
  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
