// @flow
import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions';
import ProductListing from '../components/productListing';
import { Container, Grid, Cell } from '../components/layout';

type IndexProps = {
  products: Product[]
};

type InitalProps = {
  isServer: boolean,
  store: Function
};

const IndexPage = ({ products }: IndexProps) => (
  <Container>
    <Grid columns="repeat(auto-fill, minmax(250px, 1fr))" gap="16px">
      {products.map(product => (
        <Cell key={product.name}>
          <ProductListing {...product} />
        </Cell>
      ))}
    </Grid>
  </Container>
);

IndexPage.getInitialProps = async ({ store, isServer }: InitalProps) => {
  if (isServer) {
    await store.dispatch(getProducts());
  }
  const { products } = await store.getState();
  const hasProductsLoaded = products.length;

  if (!hasProductsLoaded) {
    await store.dispatch(getProducts());
  }
};

const mapStateToProps = ({ products }: AppState): any => ({ products });

export default connect(mapStateToProps)(IndexPage);
