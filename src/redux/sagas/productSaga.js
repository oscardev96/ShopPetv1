import {act} from 'react-test-renderer';
import {put, takeEvery, all} from 'redux-saga/effects';

import API from '../../config/configAPI';
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_BYID_REQUEST,
  GET_PRODUCT_BYID_SUCCESS,
} from '../types/ProductTypes';

function* onGetProduct(action) {
  const page = action.page.toString();
  try {
    let result = yield API.get(`/products/${page}`);

    yield put({type: GET_PRODUCT_SUCCESS, data: result.data});
  } catch (error) {
    console.log(error);
  }
}
export function* watchGetProduct() {
  yield takeEvery(GET_PRODUCT_REQUEST, onGetProduct);
}

function* onGetProductById(action) {
  try {
    let result = yield API.get(`/products/productDetail/${action.id}`);

    yield put({type: GET_PRODUCT_BYID_SUCCESS, product: result.data});
  } catch (error) {
    console.log(error);
  }
}
export function* watchGetProductById() {
  yield takeEvery(GET_PRODUCT_BYID_REQUEST, onGetProductById);
}
