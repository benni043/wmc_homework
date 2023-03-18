import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product-main/product/product.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CreateProductComponent} from "./product-main/create-product/create-product.component";
import { ChangeProductComponent } from './product-main/change-product/change-product.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { CreateStudentComponent } from './student-main/create-student/create-student.component';
import { StudentComponent } from './student-main/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CreateProductComponent,
    ChangeProductComponent,
    ProductMainComponent,
    StudentMainComponent,
    CreateStudentComponent,
    StudentComponent
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
