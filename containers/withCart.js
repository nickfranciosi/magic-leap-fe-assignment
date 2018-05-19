import { connect } from 'react-redux';
import {
  getCartTotal,
  getProductsInCart,
  getCartCount,
  isProductInCart
} from '../selectors';
import { addToCart, removeFromCart } from '../store';

const mapStateToProps = (state, props) => ({
  cart: state.cart,
  count: getCartCount(state),
  productsInCart: getProductsInCart(state),
  total: getCartTotal(state),
  isInCart: props.product && isProductInCart(props.product.name)(state)
});

const withCart = Component =>
  connect(mapStateToProps, { addToCart, removeFromCart })(Component);

export default withCart;
