/* eslint-env jest */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import types from '../types';
import * as actions from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  describe('getProducts', () => {
    it('should get all products"', () => {
      fetchMock.getOnce(actions.API.products, {
        body: { products: [{ name: 'prod1' }, { name: 'prod2' }] },
        headers: { 'content-type': 'application/json' }
      });

      const expectedActions = [
        { type: types.LOADING_PRODUCTS },
        {
          type: types.PRODUCTS_RECEIVED,
          payload: [{ name: 'prod1' }, { name: 'prod2' }]
        }
      ];

      const store = mockStore({ products: [] });
      return store.dispatch(actions.getProducts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('addToCart', () => {
    it('should add an item to a cart', () => {
      const fakeCartItem1 = {
        id: '123',
        quantity: 1
      };

      const fakeCartItem2 = {
        id: '123',
        quantity: 3
      };
      const expectedActions = [
        { type: types.ADD_TO_CART, payload: fakeCartItem1 },
        { type: types.ADD_TO_CART, payload: fakeCartItem2 }
      ];
      const store = mockStore({ cart: [] });

      store.dispatch(actions.addToCart(fakeCartItem1.id));
      store.dispatch(
        actions.addToCart(fakeCartItem2.id, fakeCartItem2.quantity)
      );
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('removeFromCart', () => {
    it('should remove items from cart', () => {
      const fakeCartItem = {
        id: '123',
        quantity: 1
      };
      const expectedActions = [
        { type: types.REMOVE_FROM_CART, payload: fakeCartItem.id }
      ];
      const store = mockStore({ cart: [fakeCartItem] });

      store.dispatch(actions.removeFromCart(fakeCartItem.id));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
