// @flow
import { connect } from 'react-redux';
import {
  getCartTotal,
  getProductsInCart,
  getProductsInCartWithQuantity,
  getCartCount,
  isProductInCart
} from '../selectors';
import { addToCart, removeFromCart } from '../actions';

const mapStateToProps = (state: AppState, props: any) => ({
  cart: state.cart,
  count: getCartCount(state),
  productsInCart: getProductsInCart(state),
  productsInCartWithQuantity: getProductsInCartWithQuantity(state),
  total: getCartTotal(state),
  isInCart: props.product && isProductInCart(props.product.name)(state)
});

const withCart = (Component: any) =>
  connect(mapStateToProps, { addToCart, removeFromCart })(Component);

export default withCart;
