// @flow
import actionTypes from '../actions/types';

export default (state: any = [], action: any) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_RECEIVED:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
