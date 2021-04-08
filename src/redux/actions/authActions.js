import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  SET_LOGIN,
  SIGN_UP_REQUEST,
  LOGIN_SOCIAL_REQUEST,
} from '../types/AuthTypes';

export const login = (email, password) => ({
  type: LOGIN_REQUEST,
  email,
  password,
});
export const logout = () => {
  return {type: LOGOUT_REQUEST};
};

export const setLogin = (token) => {
  return {type: SET_LOGIN, token};
};
export const signup = (email, name, password) => ({
  type: SIGN_UP_REQUEST,
  email,
  name,
  password,
});

export const loginSocial = (id, email, name, image, typeSocial) => {
  return {
    type: LOGIN_SOCIAL_REQUEST,
    id,
    email,
    name,
    image,
    typeSocial,
  };
};
