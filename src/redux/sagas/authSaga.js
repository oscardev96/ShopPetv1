import {put, takeEvery, all} from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SOCIAL_REQUEST,
  LOGIN_SOCIAL_SUCCESS,
} from '../types/AuthTypes';
import API from '../../config/configAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* onLogin(action) {
  try {
    let result = yield API.post('/auth/login', {
      email: action.email,
      password: action.password,
    });

    yield AsyncStorage.setItem('@token', result.data.token);

    yield put({type: LOGIN_SUCCESS, token: result.data.token});
  } catch (error) {
    yield put({type: LOGIN_FAIL});
    console.log(error);
  }
}
export function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, onLogin);
}
// END LOGIN ACTION

function* onLoginSocial(action) {
  console.log(action);
  try {
    let result = yield API.post('/auth/loginSocial', {
      idSocial: action.id,
      email: action.email,
      name: action.name,
      avatar: action.image,
      type: action.typeSocial,
    });
    yield AsyncStorage.setItem('@token', result.data.token);
    yield put({type: LOGIN_SOCIAL_SUCCESS, token: result.data.token});
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoginSocial() {
  yield takeEvery(LOGIN_SOCIAL_REQUEST, onLoginSocial);
}
/// END LOGIN FACEBOK
//LOGIN GOOGLE

function* onSignUp(action) {
  try {
    let result = yield API.post('/user/signup', {
      email: action.email,
      name: action.name,
      password: action.password,
    });
    yield AsyncStorage.setItem('@token', result.data.token);

    yield put({type: SIGN_UP_SUCCESS, token: result.data.token});
  } catch (error) {
    console.log(error);
  }
}

export function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, onSignUp);
}
