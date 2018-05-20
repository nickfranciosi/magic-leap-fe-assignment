// @flow
import { createSelector } from 'reselect';

export const getProducts = (state: AppState): ?(Product[]) => state.products;
export const getCart = (state: AppState): ?(CartEntry[]) => state.cart;

// TODO: Move to utility
const formatPrice = (priceString: string = ''): number =>
  parseInt(priceString.replace(',', ''), 10);

export const getProductsInCart: Function = createSelector(
  [getProducts, getCart],
  (products: [Product], cart: [CartEntry]) =>
    products.filter(item => cart.map(i => i.id).indexOf(item.name) !== -1)
);

// TODO: if can resolve all cart entries of same product this is more efficient
// export const getProductsInCart = createSelector(
//   [getProducts, getCart],
//   (products, cart) => cart.map(i => products.find(p => p.name === i.id))
// );

export const getCartTotal: Function = createSelector(
  [getProductsInCart, getCart],
  (products: [Product], cart: [CartEntry]) =>
    products.reduce((acc, curr) => {
      const multiplier = cart
        .filter(i => i.id === curr.name)
        .reduce((ac, cur) => ac + cur.quantity, 0);
      return acc + formatPrice(curr.price) * multiplier;
    }, 0)
);

export const getCartCount: Function = createSelector(
  [getCart],
  (cart: [CartEntry]) => cart.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const isProductInCart: Function = (productName: string) =>
  createSelector(
    [getProductsInCart],
    (products: [Product]) =>
      products.filter(product => product.name === productName).length > 0
  );
