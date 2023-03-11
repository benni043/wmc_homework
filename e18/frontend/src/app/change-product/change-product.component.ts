import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-change-product',
  templateUrl: './change-product.component.html',
  styleUrls: ['./change-product.component.css']
})
export class ChangeProductComponent {

  name: string = "";
  price: number = 0;
  id: number = 0;

  change() {
    this.changeProduct.emit({name: this.name, price: this.price, id: this.id} as Product)
  }

  @Output() changeProduct: EventEmitter<Product> = new EventEmitter<Product>();

  @Input() availableProducts: Product[] = [];
}
