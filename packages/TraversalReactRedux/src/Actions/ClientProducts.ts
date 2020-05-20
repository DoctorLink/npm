import { TraversalClientProducts } from '../Models/Product';

export const CLIENT_PRODUCTS_GET = 'CLIENT_PRODUCTS_GET';
export const clientProductsGet = () => ({ type: CLIENT_PRODUCTS_GET });

export const CLIENT_PRODUCTS_SET = 'CLIENT_PRODUCTS_SET';
export const clientProductsSet = (products: TraversalClientProducts) => ({
  type: CLIENT_PRODUCTS_SET,
  products,
});

export type ClientProductsAction =
  | { type: typeof CLIENT_PRODUCTS_GET }
  | { type: typeof CLIENT_PRODUCTS_SET; products: TraversalClientProducts };
