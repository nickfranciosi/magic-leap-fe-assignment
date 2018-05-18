// @flow
import React from 'react';
import { Container, Grid, Cell } from '../components/layout';
import ProductListing from '../components/productListing';
import withCart from '../containers/withCart';

type CheckoutPageProps = {
  productsInCart: [Product]
};

const CheckoutPage = ({ productsInCart: products }: CheckoutPageProps) => (
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

export default withCart(CheckoutPage);
