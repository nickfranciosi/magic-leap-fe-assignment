// @flow
import 'isomorphic-unfetch';
import actionTypes from './types';

// TODO: should be a call to our node backend
export const API = {
  products: 'https://demo7475333.mockable.io/spaceships'
};
// Usually I would split actions up into separate files based
// on the piece of state that they work on but since
// there are  only products and cart right now
// and they are related I thought one actions file
// would be more straightforward
export const getProducts = () => async (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.LOADING_PRODUCTS });
  try {
    // TODO: move this to a server side api call or at least to .env
    // eslint-disable-next-line no-undef
    const res = await fetch(API.products);
    const { products } = await res.json();
    dispatch({ type: actionTypes.PRODUCTS_RECEIVED, payload: products });
  } catch (e) {
    dispatch({ type: actionTypes.LOAD_PRODUCTS_FAILED, payload: e });
  }
};

export const addToCart = (id: string, quantity: number = 1) => (
  dispatch: Dispatch
) => {
  dispatch({ type: actionTypes.ADD_TO_CART, payload: { id, quantity } });
};

export const removeFromCart = (id: string) => (dispatch: Dispatch) =>
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
