// @flow
import { combineReducers } from 'redux';
import cart from './cart';
import loading from './loading';
import products from './products';

export default combineReducers({ loading, cart, products });
