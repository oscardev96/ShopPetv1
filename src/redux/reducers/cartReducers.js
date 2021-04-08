import {color} from 'react-native-reanimated';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
} from '../types/CartTypes';

const initialState = {
  numberCart: 0,
  items: [],
  totalAmount: 0,
};
//  item in list product  {
//   id:
//   name,
///price
//     quantity,
//     sum
// }
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const {id, name, price, image, quantity} = action;
      if (state.numberCart === 0) {
        let cart = {
          id,
          name,
          price,
          image,
          quantity,
        };
        return {
          ...state,
          items: [...state.items, cart],
          numberCart: quantity,
          totalAmount: price * quantity,
        };
      } else {
        let existed_item = state.items.find((item) => item.id === id);
        if (existed_item) {
          let newItem = [...state.items];
          newItem.map((item, index) => {
            if (item.id === id) {
              newItem[index].quantity += quantity;
            }
          });
          return {
            ...state,
            items: newItem,
            numberCart: state.numberCart + quantity,
            totalAmount: state.totalAmount + quantity * price,
          };
        } else {
          let _cart = {
            id: id,
            name,
            price,
            image,
            quantity,
          };
          return {
            ...state,
            items: state.items.concat(_cart),
            numberCart: state.numberCart + quantity,
            totalAmount: state.totalAmount + quantity * price,
          };
        }
      }
    case CLEAR_CART:
      return {...state, numberCart: 0, items: [], totalAmount: 0};
    case REMOVE_FROM_CART:
      let itemRemove = state.items.find((item) => item.id == action.id);
      let new_items = state.items.filter((item) => item.id != action.id);

      return {
        ...state,
        numberCart: state.numberCart - itemRemove.quantity,
        items: new_items,
        totalAmount: state.totalAmount - itemRemove.quantity * itemRemove.price,
      };
    case INCREASE_QUANTITY:
      let itemIncrease = state.items.find((item) => item.id == action.id);

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? {...item, quantity: item.quantity + 1} : item,
        ),
        numberCart: state.numberCart + 1,
        totalAmount: state.totalAmount + itemIncrease.price,
      };
    case DECREASE_QUANTITY:
      let itemDecrease = state.items.find((item) => item.id == action.id);
      if (itemDecrease.quantity > 1) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.id
              ? {...item, quantity: item.quantity - 1}
              : item,
          ),
          numberCart: state.numberCart - 1,
          totalAmount: state.totalAmount - itemDecrease.price,
        };
      } else {
        return {...state};
      }

    default:
      return state;
  }
};
