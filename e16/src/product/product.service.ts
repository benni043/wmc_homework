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
        this.productStore.put(product);

        return product;
    }

    public delete(id: number): boolean {
        return this.productStore.delete(id);
    }

    public change(id: number, newProduct: Product): boolean {
        return this.productStore.change(id, newProduct);
    }

}