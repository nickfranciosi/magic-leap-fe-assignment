import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import 'isomorphic-unfetch';

const exampleInitialState = {
  loading: false,
  products: [],
  cart: []
};

export const actionTypes = {
  LOADING_PRODUCTS: 'LOADING_PRODUCTS',
  PRODUCTS_RECEIVED: 'PRODUCTS_RECEIVED',
  LOAD_PRODUCTS_FAILED: 'LOAD_PRODUCTS_FAILED'
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
    default:
      return state;
  }
};

// ACTIONS

export const getProducts = () => async dispatch => {
  dispatch({ type: actionTypes.LOADING_PRODUCTS });
  try {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://demo7475333.mockable.io/spaceships');
    const { products } = await res.json();
    dispatch({ type: actionTypes.PRODUCTS_RECEIVED, payload: products });
  } catch (e) {
    dispatch({ type: actionTypes.LOAD_PRODUCTS_FAILED, payload: e });
  }
};

export const initStore = (initialState = exampleInitialState) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
