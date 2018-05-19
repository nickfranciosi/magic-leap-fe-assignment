import { connect } from 'react-redux';
import { getCartTotal, getProductsInCart, getCartCount } from '../selectors';

const mapStateToProps = state => ({
  cart: state.cart,
  count: getCartCount(state),
  productsInCart: getProductsInCart(state),
  total: getCartTotal(state)
});

const withCart = Component => connect(mapStateToProps)(Component);

export default withCart;
