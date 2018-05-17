// @flow
import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../store';
import ProductListing from '../components/productListing';
import { Container, Grid, Cell } from '../components/layout';

type IndexProps = {
  products: [Product]
};

const IndexPage = ({ products }: IndexProps) => (
  <Container>
    <Grid columns="repeat(auto-fill, minmax(250px, 1fr))">
      {products.map(product => (
        <Cell key={product.name}>
          <ProductListing {...product} />
        </Cell>
      ))}
    </Grid>
  </Container>
);

IndexPage.getInitialProps = async ({ store, isServer }) => {
  if (isServer) {
    await store.dispatch(getProducts());
  }
  const { products } = await store.getState();
  const hasProductsLoaded = products.length;

  if (!hasProductsLoaded) {
    await store.dispatch(getProducts());
  }
};

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(IndexPage);
