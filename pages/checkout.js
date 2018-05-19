// @flow
import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Cell } from '../components/layout';
import ProductListing from '../components/productListing';
import withCart from '../containers/withCart';
import colors from '../styles/colors';

type CheckoutPageProps = {
  productsInCart: [Product],
  total: number
};

const Message = styled.h2`
  font-size: 20px;
  color: ${colors.primaryText};
`;

const CheckoutPage = ({
  productsInCart: products,
  total
}: CheckoutPageProps) => (
  <Container>
    {products.length < 1 ? (
      <Message>Looks like you do not have any items in your cart</Message>
    ) : (
      <>
        <Message>Cart Total: {total}</Message>
        <Grid columns="repeat(auto-fill, minmax(250px, 1fr))">
          {products.map(product => (
            <Cell key={product.name}>
              <ProductListing {...product} />
            </Cell>
          ))}
        </Grid>
      </>
    )}
  </Container>
);

export default withCart(CheckoutPage);
