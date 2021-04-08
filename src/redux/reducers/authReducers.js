import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  LOGIN_FAIL,
  SET_LOGIN,
  SIGN_UP_FAIL,
  LOGIN_SOCIAL_SUCCESS,
  SIGN_UP_SUCCESS,
} from '../types/AuthTypes';
const initialState = {
  isLogin: false,
  token: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, isLogin: true, token: action.token};
    case LOGIN_FAIL:
      return {...state, error: true};
    case SET_LOGIN:
      return {...state, isLogin: true, token: action.token};
    case LOGIN_SOCIAL_SUCCESS:
      return {...state, isLogin: true, token: action.token};
    case LOGOUT_REQUEST:
      return {...state, isLogin: false, error: false, token: null};
    case SIGN_UP_SUCCESS:
      return {...state, isLogin: true, token: action.token};
    // case SIGN_UP_FAIL:
    //   return {...state, messages: action.messages};
    default:
      return state;
  }
};
