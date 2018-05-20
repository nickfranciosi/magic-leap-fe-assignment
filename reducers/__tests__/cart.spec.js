/* eslint-env jest */
import reducer from '../cart';
import types from '../../actions/types';

describe('cart reducer', () => {
  test('it should return the intial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  test('it should handle ADD_TO_CART', () => {
    const fakeCartEntry = { id: '123', quantity: 1 };
    expect(
      reducer([], { type: types.ADD_TO_CART, payload: fakeCartEntry })
    ).toEqual([fakeCartEntry]);
  });

  test('it should update quantity on ADD_TO_CART when item already exists', () => {
    const fakeCart = [{ id: '123', quantity: 3 }];
    const fakeCartEntry = { id: '123', quantity: 1 };
    const expected = { id: '123', quantity: 4 };
    expect(
      reducer(fakeCart, { type: types.ADD_TO_CART, payload: fakeCartEntry })
    ).toEqual([expected]);
  });

  test('it should handle REMOVE_FROM_CART', () => {
    const fakeCart = [{ id: '123', quantity: 1 }, { id: '456', quantity: 3 }];
    expect(
      reducer(fakeCart, {
        type: types.REMOVE_FROM_CART,
        payload: fakeCart[0].id
      })
    ).toEqual([fakeCart[1]]);
  });
});
