import {put, takeEvery, all} from 'redux-saga/effects';
import {watchLogin, watchLoginSocial, watchSignUp} from './authSaga';
import {watchGetAllOrder, watchGetOrder} from './orderSaga';
import {watchGetProduct, watchGetProductById} from './productSaga';
import {watchEditUser, watchGetUser} from './userSaga';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignUp(),
    watchGetUser(),
    watchEditUser(),
    watchGetProduct(),
    watchGetProductById(),
    watchLoginSocial(),
    watchGetAllOrder(),
    watchGetOrder(),
  ]);
}
