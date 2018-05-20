/* eslint-env jest */
import reducer from '../products';
import types from '../../actions/types';

describe('products reducer', () => {
  test('it should return the intial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  test('it should handle PRODUCTS_RECEIVED', () => {
    const fakeProducts = [{ name: 'prod1' }, { name: 'prod2' }];
    expect(
      reducer([], { type: types.PRODUCTS_RECEIVED, payload: fakeProducts })
    ).toEqual(fakeProducts);
  });
});
