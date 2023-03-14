export interface Product {
    id:number;
    name:string;
    price:number;
}

export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  id: number
}

export interface Bulk {
    countOfRightProducts: number,
    products: Product[]
}
