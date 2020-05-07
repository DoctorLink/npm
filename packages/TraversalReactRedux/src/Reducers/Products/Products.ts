import { CLIENT_PRODUCTS_SET } from '../../Actions';
import { ProductAction, TraversalClientProducts } from 'Models/Product';

const clientProducts = (
  state: TraversalClientProducts = { products: [], versions: [] },
  action: ProductAction
) => {
  switch (action.type) {
    case CLIENT_PRODUCTS_SET:
      return action.products;
    default:
      return state;
  }
};

export default clientProducts;
