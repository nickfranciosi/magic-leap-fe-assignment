// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Container } from '../components/layout';
import { isProductInCart } from '../selectors';
import { getProducts, addToCart, removeFromCart } from '../store';

type ShopPagePros = {
  product: Product,
  isInCart: boolean,
  addToCart: any,
  removeFromCart: any
};

type ShopPageState = {
  quantity: number
};

const ProductHero = styled.div`
  height: 400px;
  width: 50vw;
  max-width: 800px;
  background: url('${({ src }) => src}') no-repeat;
  background-size: cover;
`;

const ProductTitle = styled.h2`
  color: #fff;
  font-family: 'Raleway', Helvetica, sans-serif;
`;

class ShopPage extends Component<ShopPagePros, ShopPageState> {
  state = {
    quantity: 1
  };
  static async getInitialProps({ store, isServer, query: { name } }) {
    if (isServer) {
      await store.dispatch(getProducts());
    }
    const { products } = await store.getState();
    const hasProductsLoaded = products.length;

    if (!hasProductsLoaded) {
      await store.dispatch(getProducts());
    }

    const product = products.find(p => p.name === name);
    return { product };
  }

  setQuantity = e => {
    this.setState({
      quantity: parseInt(e.target.value, 10)
    });
  };

  render() {
    const {
      product,
      isInCart,
      addToCart: add,
      removeFromCart: remove
    } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <ProductHero src={`/static/images/products/${product.name}.jpg`}>
          <Container>
            <ProductTitle>
              {product.name} {isInCart && 'is in cart'}
            </ProductTitle>
            {product.price ? (
              <>
                <select defaultValue={1} onChange={this.setQuantity}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button onClick={() => add(product.name, quantity)}>
                  Add To Cart
                </button>
                <button onClick={() => remove(product.name)}>
                  Remove from Cart
                </button>
              </>
            ) : (
              <p>Not currently availble</p>
            )}
          </Container>
        </ProductHero>
      </div>
    );
  }
}

// TODO: move to container
const mapStateToProps = (state, props) => ({
  isInCart: isProductInCart(props.product.name)(state)
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(
  ShopPage
);
