import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  constructor(private httpClient: HttpClient) {
  }

  price: number = 0;
  name: string = "";

  create() {
    this.httpClient.post<Product>("http://localhost:7000/api/product", {name: this.name, price: this.price} as Product)
      .subscribe({
        next: res => {
          this.pushProduct.emit(res);
        },
        error: err => {
          switch (err.status) {
            case 400: {
              alert("negative price or empty name");
              break;
            }
            default:
              alert("something went wrong");
          }
        }
      })
  }

  @Output() pushProduct: EventEmitter<Product> = new EventEmitter<Product>();

}
