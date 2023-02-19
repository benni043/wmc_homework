import {ProductStore} from "./product.store";
import {Product} from "./product";

export class ProductService {
    private productStore: ProductStore;

    constructor() {
        this.productStore = new ProductStore();
    }

    public findAll(): Product[] {
        return this.productStore.findAll();
    }

    public find(sid: number): Product {
        return this.productStore.find(sid);
    }

    public create(product: Product): Product {
        product.id = this.productStore.findAll().length + 1;
        this.productStore.put(product);

        return product;
    }

    /** add new application logic here */

    public delete(productId: number): void {
        this.findAll()
    }

    public change(product: Product): void {

    }
}