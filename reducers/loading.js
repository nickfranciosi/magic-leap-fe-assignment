// @flow
import actionTypes from '../actions/types';

export default (state: boolean = false, action: Action) => {
  switch (action.type) {
    case actionTypes.LOADING_PRODUCTS:
      return true;
    case actionTypes.PRODUCTS_RECEIVED:
      return false;
    case actionTypes.LOAD_PRODUCTS_FAILED:
      return false;
    default:
      return state;
  }
};
