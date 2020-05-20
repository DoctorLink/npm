import { CLIENT_PRODUCTS_SET, ClientProductsAction } from '../../Actions';
import { TraversalClientProducts } from 'Models/Product';

const clientProducts = (
  state: TraversalClientProducts = { products: [], versions: [] },
  action: ClientProductsAction
): TraversalClientProducts => {
  switch (action.type) {
    case CLIENT_PRODUCTS_SET:
      return action.products;
    default:
      return state;
  }
};

export default clientProducts;
