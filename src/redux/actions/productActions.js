import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_BYID_REQUEST,
  FILTER_PRODUCT,
  SET_PRODUCT_DETAIL,
} from '../types/ProductTypes';

export const getProduct = (page) => {
  return {
    type: GET_PRODUCT_REQUEST,
    page,
  };
};
export const getProductById = (id) => ({
  type: GET_PRODUCT_BYID_REQUEST,
  id,
});
export const filterProduct = (category) => {
  return {
    type: FILTER_PRODUCT,
    category,
  };
};
export const setProductDetail = () => {
  return {
    type: SET_PRODUCT_DETAIL,
  };
};
