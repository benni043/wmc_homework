import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CreateProductComponent} from "./create-product/create-product.component";
import { ChangeProductComponent } from './change-product/change-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CreateProductComponent,
    ChangeProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
