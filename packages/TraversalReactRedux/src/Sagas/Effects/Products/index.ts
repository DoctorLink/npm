import { takeLatest } from 'redux-saga/effects';
import { CLIENT_PRODUCTS_GET } from '../../../Actions';
import createProductsGenerator from '../../Generators/Products';

export default (traversalApi: any) => [
  takeLatest(CLIENT_PRODUCTS_GET, createProductsGenerator(traversalApi)),
];
