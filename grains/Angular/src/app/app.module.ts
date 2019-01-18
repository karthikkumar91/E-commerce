import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

// router link
import {RouterModule,Routes} from '@angular/router';
import { CustomerViewComponent } from './customer-view/customer-view.component'; 

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//storge
import {NgxWebstorageModule} from 'ngx-webstorage';
import {CookieService} from 'ngx-cookie-service';

import { AdminTableComponent } from './admin-table/admin-table.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CusLoginComponent } from './cus-login/cus-login.component';
import { CusRegisterComponent } from './cus-register/cus-register.component';
import { SideNavicationComponent } from './side-navication/side-navication.component';
import { NutsSectionComponent } from './nuts-section/nuts-section.component';
import { GrainsSectionComponent } from './grains-section/grains-section.component';
import { DryFruitSectionComponent } from './dry-fruit-section/dry-fruit-section.component';

const appRoutesConfig:Routes = [
  { path : 'admin-login', component : AdminLoginComponent},
  {path : 'admin-table',component : AdminTableComponent,
  children :[{path : '',component : AddProductComponent},
  {path : 'add-product',component : AddProductComponent}
]
  },
  //{path : '**',redirectTo : '', component : CustomerViewComponent}
  {path : 'customer-page',component : CustomerViewComponent},
  {path : '',component : CustomerViewComponent,
  // {path : 'customer-page',component : CustomerViewComponent,
  // children : [{path :'register',component : RegisterComponent},
  // {path : 'login',component : LoginComponent}]
  children:[ {
      path :'',component:SideNavicationComponent, 
          children:[
            {path:'',component : NutsSectionComponent},
            {path : 'nuts',component : NutsSectionComponent},
            {path : 'grains',component : GrainsSectionComponent},
            {path : 'dry-fruit',component : DryFruitSectionComponent}]
      }]
  },
  {path :'customer-login',component : CusLoginComponent},
  {path : 'customer-register',component: CusRegisterComponent},
 
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    CustomerViewComponent,
    AdminTableComponent,
    AddProductComponent,
    RegisterComponent,
    LoginComponent,
    CusLoginComponent,
    CusRegisterComponent,
    SideNavicationComponent,
    NutsSectionComponent,
    GrainsSectionComponent,
    DryFruitSectionComponent,
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutesConfig),FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
