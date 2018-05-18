import { connect } from 'react-redux';
import { getCartTotal, getProductsInCart } from '../selectors';

const mapStateToProps = state => ({
  cart: state.cart,
  productsInCart: getProductsInCart(state),
  total: getCartTotal(state)
});

const withCart = Component => connect(mapStateToProps)(Component);

export default withCart;
