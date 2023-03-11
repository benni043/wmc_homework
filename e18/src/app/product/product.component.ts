import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product | undefined;

  delete() {
    this.deleteProduct.emit(this.product);
  }

  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();
}
