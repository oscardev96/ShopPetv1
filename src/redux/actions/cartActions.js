import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from '../types/CartTypes';

export const addToCart = (id, name, price, image, quantity) => {
  return {
    type: ADD_TO_CART,
    id,
    name,
    price,
    image,
    quantity,
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};
export const IncreaseQuantity = (id) => {
  return {
    type: INCREASE_QUANTITY,
    id,
  };
};
export const DecreaseQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    id,
  };
};
