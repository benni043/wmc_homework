import {Product} from "./product";

const defaultValues: Product[] = [
    {
        id: 1,
        lastName: "McLaren F1 New Era Cap 'Lando Norris'",
        price: 42.46
    },
    {
        id: 2,
        lastName: "Triumph Bonneville T100 Meriden Blue/Tangerine",
        price: 11885
    }
]

/** Only for testing; real application would use a DB instead of this store object */
export class ProductStore {
    private readonly productIndex: { [id: number]: Product } = {}
    private index: number = 0;

    constructor() {
        this.initWithDefaultValues();
    }

    private initWithDefaultValues() {
        defaultValues.forEach(defaultValue => {
            this.put(defaultValue)
        });
    }

    public findAll(): Product[] {
        return Object.values(this.productIndex)
    }

    public find(sid: number): Product {
        return this.productIndex[sid];
    }

    public put(product: Product) {
        product.id = this.index;
        this.index++;

        this.productIndex[product.id] = product;
    }

    public delete(id: number): boolean {
        if (this.productIndex[id] === undefined) {
            return false;
        }

        delete this.productIndex[id];
        return true;
    }

    public change(id: number, newProduct: Product): boolean {
        if (this.productIndex[id] === undefined) {
            return false;
        }

        this.productIndex[id].name = newProduct.lastName;
        this.productIndex[id].price = newProduct.price;

        return true;
    }
}