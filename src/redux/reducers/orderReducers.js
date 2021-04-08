import {
  GET_ALL_ORDER_SUCCESS,
  GET_ORDER_BY_ID_SUCCESS,
  CLEAR,
} from '../types/OrderTypes';

const initialState = {
  isLoad: true,
  listOrder: [],
  OrderItem: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDER_SUCCESS:
      return {...state, isLoad: false, listOrder: action.data};
    case GET_ORDER_BY_ID_SUCCESS:
      return {...state, OrderItem: action.data};
    case CLEAR:
      return {...state, OrderItem: {}};
    default:
      return state;
  }
};
