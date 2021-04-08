import {combineReducers} from 'redux';
import authReducers from './authReducers';
import userReducers from './userReducers';
import productReducers from './productReducers';
import cartReducers from './cartReducers';
import orderReducers from './orderReducers';
export const rootReducer = combineReducers({
  authReducers: authReducers,
  userReducers: userReducers,
  productReducers: productReducers,
  cartReducers: cartReducers,
  orderReducers: orderReducers,
});
