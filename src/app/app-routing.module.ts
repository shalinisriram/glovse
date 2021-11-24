import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerManagementComponent } from './CustomerManagement/CustomerManagement.component';
import { MainNavComponent } from './MainNav/MainNav.component';
import { ProductManagementComponent } from './ProductManagement/ProductManagement.component';
import { RecordsComponent } from './Records/Records.component';

const routes: Routes = [
  {
    path: '' ,
    component: MainNavComponent,
    children : [
      {
        path: 'product' ,
        component: ProductManagementComponent
      },
      {
        path: 'records' ,
        component: RecordsComponent
      },
      {
        path: 'Customer' ,
        component: CustomerManagementComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
