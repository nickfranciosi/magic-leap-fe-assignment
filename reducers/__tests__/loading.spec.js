/* eslint-env jest */
import reducer from '../loading';
import types from '../../actions/types';

describe('loading reducer', () => {
  test('it should return the intial state', () => {
    expect(reducer(undefined, {})).toEqual(false);
  });

  test('it should handle LOADING_PRODUCTS', () => {
    expect(reducer(undefined, { type: types.LOADING_PRODUCTS })).toEqual(true);
  });

  test('it should handle PRODUCTS_RECEIVED', () => {
    expect(reducer(undefined, { type: types.PRODUCTS_RECEIVED })).toEqual(
      false
    );
  });

  test('it should handle LOAD_PRODUCTS_FAILED', () => {
    expect(reducer(undefined, { type: types.LOAD_PRODUCTS_FAILED })).toEqual(
      false
    );
  });
});
