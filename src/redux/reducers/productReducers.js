import {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_BYID_SUCCESS,
  FILTER_PRODUCT,
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
    case FILTER_PRODUCT:
      if (action.category === 'All') {
        return {...state};
      }
      if (action.category === 'Foods') {
        let newList = state.products.filter(
          item => item.category.name === 'Foods',
        );
        return {...state, products: newList};
      }
      if (action.category === 'Toys') {
        let newList = state.products.filter(
          item => item.category.name === 'Toys',
        );
        return {...state, products: newList};
      }
      if (action.category === 'Medicine') {
        let newList = state.products.filter(
          item => item.category.name === 'Medicine',
        );
        return {...state, products: newList};
      }
    default:
      return state;
  }
};
