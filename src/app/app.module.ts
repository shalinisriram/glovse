import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagementComponent } from './ProductManagement/ProductManagement.component';
import { UserManagementComponent } from './UserManagement/UserManagement.component';
import { UserRegistrationComponent } from './UserRegistration/UserRegistration.component';
import { ProductRegistrationComponent } from './ProductRegistration/ProductRegistration.component';
import { CustomerManagementComponent } from './CustomerManagement/CustomerManagement.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { MainNavComponent } from './MainNav/MainNav.component';
import { RecordsComponent } from './Records/Records.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ZXingScannerModule } from '@zxing/ngx-scanner';



@NgModule({
  declarations: [
    AppComponent,
      ProductManagementComponent,
      UserManagementComponent,
      UserRegistrationComponent,
      ProductRegistrationComponent,
      CustomerManagementComponent,
      DashboardComponent,
      MainNavComponent,
      RecordsComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxQRCodeModule,
    ZXingScannerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
