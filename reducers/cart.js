// @flow
import actionTypes from '../actions/types';

const updateItemInCart = (state: any, action: any) =>
  state.map(item => {
    if (item.id !== action.payload.id) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return a combined quantity
    return {
      ...item,
      ...action.payload,
      quantity: item.quantity + action.payload.quantity
    };
  });

const itemAlreadyInCart = (state: any, action: any): boolean =>
  state.findIndex(i => i.id === action.payload.id) !== -1;

export default (state: any = [], action: any) => {
  if (action.type === actionTypes.ADD_TO_CART) {
    if (itemAlreadyInCart(state, action)) {
      return updateItemInCart(state, action);
    }
    return [...state, action.payload];
  }
  if (action.type === actionTypes.REMOVE_FROM_CART) {
    return state.filter(i => i.id !== action.payload);
  }

  // Since we aren't really buying anything
  // I am just clearing out the cart when users decide
  // to purchase the items in their cart
  if (action.type === actionTypes.CHECKOUT_CART) {
    return [];
  }

  return state;
};
