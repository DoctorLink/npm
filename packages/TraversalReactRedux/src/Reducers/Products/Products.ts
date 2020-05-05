import { CLIENT_PRODUCTS_SET } from '../../Actions';
import { Product, ProductAction } from 'Models/Product';

const clientProducts = (state: Array<Product> = [], action: ProductAction) => {
  switch (action.type) {
    case CLIENT_PRODUCTS_SET:
      return action.products;
    default:
      return state;
  }
};

export default clientProducts;
