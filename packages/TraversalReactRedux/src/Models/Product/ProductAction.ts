import { Product } from './Product'

export interface ProductAction {
    type: string;
    products: Array<Product>
}