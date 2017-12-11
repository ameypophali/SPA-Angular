import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { DropdownDirective } from './dropdown.directive';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { CustomerSignupComponent } from './customer/customer-signup/customer-signup.component';
import { ItemTypeListComponent } from './menu/item-type-list/item-type-list.component';
import { ItemTypeComponent } from './menu/item-type/item-type.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuItemListComponent } from './menu/menu-item-list/menu-item-list.component';
import { MenuItemService } from './menu/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeLoginComponent,
    CustomerComponent,
    CustomerLoginComponent,
    DropdownDirective,
    ContactUsComponent,
    FooterComponent,
    MenuComponent,
    MenuDetailsComponent,
    CustomerSignupComponent,
    ItemTypeListComponent,
    ItemTypeComponent,
    MenuItemComponent,
    MenuItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MenuItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
