// @flow
import actionTypes from '../actions/types';

export default (state: any = [], action: Action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return [...state, action.payload];
    case actionTypes.REMOVE_FROM_CART:
      return state.filter(i => i.id !== action.payload);
    default:
      return state;
  }
};
