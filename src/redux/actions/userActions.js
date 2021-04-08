import {EDIT_USER_REQUEST, GET_USER_REQUEST} from '../types/UserTypes';

export const getUser = () => {
  return {
    type: GET_USER_REQUEST,
  };
};
export const editUser = (data, navigation) => {
  return {
    type: EDIT_USER_REQUEST,
    data,
    navigation,
  };
};
