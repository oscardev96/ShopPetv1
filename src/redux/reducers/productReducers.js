import {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_BYID_SUCCESS,
  SET_PRODUCT_DETAIL,
} from '../types/ProductTypes';

const initialState = {
  isLoading: false,
  products: [],
  productDetail: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.data,
      };
    case SET_PRODUCT_DETAIL:
      return {...state, productDetail: [], isLoading: false};
    case GET_PRODUCT_BYID_SUCCESS:
      return {...state, productDetail: action.product, isLoading: true};

    default:
      return state;
  }
};
