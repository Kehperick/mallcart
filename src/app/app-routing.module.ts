import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { MainFormComponent } from './form/main-form/main-form.component';
import { RegisterFormComponent } from './form/register-form/register-form.component';
import { CartComponent } from './cart/cart.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';

import { SearchMobileComponent } from './search-mobile/search-mobile.component';
import { NotificationComponent } from './notification/notification.component';
import { SellComponent } from './sell/sell.component';

import { FooterComponent } from './footer/footer.component';
import { MainSlideComponent } from './main-slide/main-slide.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AddBusinessComponent } from './add-business/add-business.component';
import { SellFormComponent } from './sell-form/sell-form.component';


const routes: Routes = [

  {path: 'forms', component: MainFormComponent},
  {path: 'search', component: SearchMobileComponent},
  {path: 'item-detail', component: ItemDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: '', component: ItemDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Components = [
  HeaderComponent,
  LoginFormComponent,
  MainFormComponent,
  RegisterFormComponent,
  CartComponent,
  ItemDetailComponent,
  ItemListComponent,
  SearchMobileComponent,
  NotificationComponent,
  SellComponent,
  FooterComponent,
  MainSlideComponent,
  MainHomeComponent,
  AddBusinessComponent,
  SellFormComponent
]
