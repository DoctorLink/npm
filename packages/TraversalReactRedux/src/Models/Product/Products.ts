import { Product } from './Product';
import { Version } from './Version';

export interface TraversalClientProducts {
  products: Array<Product>;
  versions: Array<Version>;
}
