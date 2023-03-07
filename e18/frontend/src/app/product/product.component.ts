import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() price: number = 0;
  @Input() name: string = "";
  @Input() id: number = 0;

  delete() {
    this.deleteProduct.emit({id: this.id, name: this.name, price: this.price} as Product);
  }

  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();
}
