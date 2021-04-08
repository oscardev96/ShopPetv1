import {put, takeEvery, all} from 'redux-saga/effects';
import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from '../types/UserTypes';
import API from '../../config/configAPI';
function* onGetUser(action) {
  try {
    let result = yield API.get('/profile');

    yield put({type: GET_USER_SUCCESS, data: result.data.user});
  } catch (error) {
    console.log(error);
  }
}
export function* watchGetUser() {
  yield takeEvery(GET_USER_REQUEST, onGetUser);
}
function* onEditUser(action) {
  try {
    let formData = new FormData();
    formData.append('name', action.data.name);
    formData.append('username', action.data.username);
    formData.append('email', action.data.email);
    formData.append('phone', action.data.phone);
    formData.append('address', action.data.address);
    formData.append('avatar', {
      uri: action.data.avatar,
      name: 'userAvatar.jpg',
      type: 'jpg',
    });
    const result = yield API.post('/profile', formData);
    if (action.navigation) {
      action.navigation.navigate('ProfileScreen');
    }
    yield put({type: EDIT_USER_SUCCESS, data: result.data.user});
  } catch (error) {
    console.log(error);
  }
}
export function* watchEditUser() {
  yield takeEvery(EDIT_USER_REQUEST, onEditUser);
}
