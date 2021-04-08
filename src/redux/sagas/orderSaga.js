import {put, takeEvery} from 'redux-saga/effects';
import API from '../../config/configAPI';
import {
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from '../types/OrderTypes';

function* onGetAllOrder(action) {
  try {
    let result = yield API.get('/orders');
    yield put({type: GET_ALL_ORDER_SUCCESS, data: result.data});
  } catch (error) {
    console.log(error);
  }
}
export function* watchGetAllOrder() {
  yield takeEvery(GET_ALL_ORDER_REQUEST, onGetAllOrder);
}

function* onGetOrder(action) {
  try {
    let result = yield API.get(`/orders/${action.id}`);
    yield put({type: GET_ORDER_BY_ID_SUCCESS, data: result.data});
  } catch (error) {
    console.log(error);
  }
}
export function* watchGetOrder() {
  yield takeEvery(GET_ORDER_BY_ID_REQUEST, onGetOrder);
}
