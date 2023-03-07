import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  products: Product[] = []

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getAllProducts().subscribe(res => {
      this.products = res;
    })
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:7000/api/product/");
  }

  pushProduct($event: Product) {
    this.products.push($event);
  }

  delete(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
    this.httpClient.delete("http://localhost:7000/api/product/" + product.id, {responseType: "text"}).subscribe();
  }

}
