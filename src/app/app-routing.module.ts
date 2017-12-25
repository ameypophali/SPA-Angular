import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerSignupComponent } from './customer/customer-signup/customer-signup.component';
import { MenuItemListComponent } from './menu/menu-item-list/menu-item-list.component';
import { ItemTypeComponent } from './menu/item-type/item-type.component';

const appRoutes : Routes = [
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: 'contactus', component: ContactUsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'menu', component: MenuComponent, children: [
        {path: '', redirectTo: '/menu/Entree', pathMatch:'full'},
        {path: ':type', component: MenuItemListComponent}
    ]},
    {path: 'employee', component:EmployeeComponent, 
        children: [
            {path: '', component: EmployeeLoginComponent,pathMatch:'full'},
            {path: 'login', component: EmployeeLoginComponent}
    ]},
    {path: 'customer', component:CustomerComponent, 
    children: [
            {path: '', component: CustomerLoginComponent, pathMatch:'full'},
            {path: 'login', component: CustomerLoginComponent},
            {path: 'signup', component: CustomerSignupComponent}
    ]},
  ];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{
    
}