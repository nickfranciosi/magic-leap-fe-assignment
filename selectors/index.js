import { createSelector } from 'reselect';

const getProducts = state => state.products;
const getCart = state => state.cart;

// TODO: Move to utility
const formatPrice = (price = '') => parseInt(price.replace(',', ''), 10);

export const getProductsInCart = createSelector(
  [getProducts, getCart],
  (products, cart) =>
    products.filter(item => cart.map(i => i.id).indexOf(item.name) !== -1)
);

export const getCartTotal = createSelector(
  [getProductsInCart, getCart],
  (products, cart) =>
    products.reduce((acc, curr) => {
      const multiplier = cart
        .filter(i => i.id === curr.name)
        .reduce((ac, cur) => ac + cur.quantity, 0);
      return acc + formatPrice(curr.price) * multiplier;
    }, 0)
);

export const getCartCount = createSelector([getCart], products =>
  products.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const isProductInCart = productName =>
  createSelector(
    [getProductsInCart],
    products =>
      products.filter(product => product.name === productName).length > 0
  );
