import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent implements OnInit{

  title = 'frontend';
  products: Product[] = []

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<Product[]>("http://localhost:7000/api/product/").subscribe(res => {
      this.products = res;
    })
  }

  pushProduct($event: Product) {
    this.products.push($event);
  }

  delete(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
    this.httpClient.delete("http://localhost:7000/api/product/" + product.id).subscribe();
  }

  changeProduct($event: Product) {
    this.httpClient.patch<Product>("http://localhost:7000/api/product/" + $event.id, $event)
      .subscribe({
        next: () => {
          this.products[this.getProductIndexWithID($event.id)].name = $event.name;
          this.products[this.getProductIndexWithID($event.id)].price = $event.price;
        },
        error: err => {
          switch (err.status) {
            case 400: {
              alert("negative price or empty name");
              break;
            }
            default: {
              alert("something went wrong");
              break
            }
          }
        }
      })
  }

  getProductIndexWithID(id: number): number {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) return i;
    }
    throw new Error();
  }

}
