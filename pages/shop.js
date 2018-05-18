// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Container } from '../components/layout';
import { getProducts, addToCart, removeFromCart } from '../store';

type ShopPagePros = {
  product: Product
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

const ShopPage = ({ product, addToCart, removeFromCart }: ShopPagePros) => (
  <div>
    <ProductHero src={`/static/images/products/${product.name}.jpg`}>
      <Container>
        <ProductTitle>{product.name}</ProductTitle>
        {product.price ? (
          <>
            <button onClick={() => addToCart(product.name)}>Add To Cart</button>
            <button onClick={() => removeFromCart(product.name)}>
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

ShopPage.getInitialProps = async ({ store, isServer, query: { name } }) => {
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
};

export default connect(null, { addToCart, removeFromCart })(ShopPage);
