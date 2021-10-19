/**
    * @description      : 
    * @author           : Keeggo
    * @group            : 
    * @created          : 11/10/2021 - 04:44:24
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/10/2021
    * - Author          : Keeggo
    * - Modification    : 
**/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));