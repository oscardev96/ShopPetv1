import {EDIT_USER_SUCCESS, GET_USER_SUCCESS} from '../types/UserTypes';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {...state, user: action.data};
    case EDIT_USER_SUCCESS:
      return {...state, user: action.data};
    default:
      return state;
  }
};
