import { TraversalClientProducts } from './Products';

export interface ProductAction {
  type: string;
  products: TraversalClientProducts;
}
