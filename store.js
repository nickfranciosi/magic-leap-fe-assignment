import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import 'isomorphic-unfetch';

// TODO: rename
const exampleInitialState = {
  loading: false,
  products: [],
  cart: []
};

export const actionTypes = {
  LOADING_PRODUCTS: 'LOADING_PRODUCTS',
  PRODUCTS_RECEIVED: 'PRODUCTS_RECEIVED',
  LOAD_PRODUCTS_FAILED: 'LOAD_PRODUCTS_FAILED',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART'
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_PRODUCTS:
      return {
        ...state,
        loading: true
      };
    case actionTypes.PRODUCTS_RECEIVED:
      return {
        ...state,
        loading: false,
        products: [...state.products, ...action.payload]
      };
    case actionTypes.LOAD_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(i => i.id !== action.payload)
      };
    default:
      return state;
  }
};

// ACTIONS

export const getProducts = () => async dispatch => {
  dispatch({ type: actionTypes.LOADING_PRODUCTS });
  try {
    // TODO: move this to a server side api call
    // eslint-disable-next-line no-undef
    const res = await fetch('http://demo7475333.mockable.io/spaceships');
    const { products } = await res.json();
    dispatch({ type: actionTypes.PRODUCTS_RECEIVED, payload: products });
  } catch (e) {
    dispatch({ type: actionTypes.LOAD_PRODUCTS_FAILED, payload: e });
  }
};

export const addToCart = (id, quantity = 1) => dispatch => {
  dispatch({ type: actionTypes.ADD_TO_CART, payload: { id, quantity } });
};

export const removeFromCart = id => dispatch =>
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });

export const initStore = (initialState = exampleInitialState) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
