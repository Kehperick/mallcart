import { MaterialComponentModule } from './MaterialComponentModule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, RippleGlobalOptions } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { MainFormComponent } from './form/main-form/main-form.component';
import { RegisterFormComponent } from './form/register-form/register-form.component';
import { CartComponent } from './cart/cart.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SearchMobileComponent } from './search-mobile/search-mobile.component';
import { NotificationComponent } from './notification/notification.component';
import { SellComponent } from './sell/sell.component';
import { Ng5SliderModule } from 'ng5-slider';
import { NguCarouselModule } from '@ngu/carousel';
import { FooterComponent } from './footer/footer.component';
import { MainSlideComponent } from './main-slide/main-slide.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AddBusinessComponent } from './add-business/add-business.component';
import { SellFormComponent } from './sell-form/sell-form.component';
@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MaterialComponentModule,
    FlexLayoutModule,
    LazyLoadImageModule,
    Ng5SliderModule,
    NguCarouselModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

