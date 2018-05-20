/* eslint-env jest */
import { formatPrice } from '../currency';

describe('currency utilities', () => {
  describe('formatPrice', () => {
    test('it should format prices from string values to numbers', () => {
      expect(formatPrice('1,200 credits')).toEqual(1200);
    });
  });
});
