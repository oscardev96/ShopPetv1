import {
  GET_ALL_ORDER_REQUEST,
  GET_ORDER_BY_ID_REQUEST,
  CLEAR,
} from '../types/OrderTypes';
export const getAll = () => {
  return {
    type: GET_ALL_ORDER_REQUEST,
  };
};
export const getOrder = (id) => {
  return {
    type: GET_ORDER_BY_ID_REQUEST,
    id: id,
  };
};
export const clearOrderItem = () => ({type: CLEAR});
