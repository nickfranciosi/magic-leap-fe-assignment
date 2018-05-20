/* eslint-env jest */
import * as selectors from '../index';

const fakeStore = {
  products: [
    { name: 'prod1', price: '100 credits' },
    { name: 'prod2', price: '1,000 credits' },
    { name: 'prod3', price: '500 credits' }
  ],
  cart: [{ id: 'prod1', quantity: 3 }, { id: 'prod2', quantity: 1 }]
};
describe('Selectors', () => {
  it('should get all products from state"', () => {
    const actual = selectors.getProducts(fakeStore);
    const expected = fakeStore.products;

    expect(actual).toEqual(expected);
  });

  it('should get all cart entries from state"', () => {
    const actual = selectors.getCart(fakeStore);
    const expected = fakeStore.cart;

    expect(actual).toEqual(expected);
  });

  it('should get all productin in the cart"', () => {
    const actual = selectors.getProductsInCart(fakeStore);
    const expected = [
      { name: 'prod1', price: '100 credits' },
      { name: 'prod2', price: '1,000 credits' }
    ];

    expect(actual).toEqual(expected);
  });

  it('should get all productin in the cart with quantity added"', () => {
    const actual = selectors.getProductsInCartWithQuantity(fakeStore);
    const expected = [
      { name: 'prod1', price: '100 credits', quantity: 3 },
      { name: 'prod2', price: '1,000 credits', quantity: 1 }
    ];

    expect(actual).toEqual(expected);
    expect(actual[0].quantity).toEqual(expected[0].quantity);
    expect(actual[1].quantity).toEqual(expected[1].quantity);
  });

  it('should return cart total cost"', () => {
    const actual = selectors.getCartTotal(fakeStore);
    const expected = 1300;

    expect(actual).toEqual(expected);
  });

  it('should return cart total count"', () => {
    const actual = selectors.getCartCount(fakeStore);
    const expected = 4;

    expect(actual).toEqual(expected);
  });

  it('should tell if a product is in the cart"', () => {
    const isIn = selectors.isProductInCart('prod1')(fakeStore);
    const isNotIn = selectors.isProductInCart('prod3')(fakeStore);

    expect(isIn).toBeTruthy();
    expect(isNotIn).toBeFalsy();
  });
});
