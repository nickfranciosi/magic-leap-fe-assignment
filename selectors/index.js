import { createSelector } from 'reselect';

const getProducts = state => state.products;
const getCart = state => state.cart;

// TODO: Move to utility
const formatPrice = (price = '') => parseInt(price.replace(',', ''), 10);

export const getProductsInCart = createSelector(
  [getProducts, getCart],
  (products, cart) => products.filter(item => cart.indexOf(item.name) !== -1)
);

export const getCartTotal = createSelector([getProductsInCart], products =>
  products.reduce((acc, curr) => acc + formatPrice(curr.price), 0)
);
