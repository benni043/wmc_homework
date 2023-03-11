export interface Product {
    id:number;
    name:string;
    price:number;
}

export interface Bulk {
    countOfRightProducts: number,
    products: Product[]
}