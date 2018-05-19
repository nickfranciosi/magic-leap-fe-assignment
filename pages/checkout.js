// @flow
import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Cell } from '../components/layout';
import CartListing from '../components/cartListing';
import { Button } from '../components/button';
import { Message } from '../components/text';
import withCart from '../containers/withCart';

type CheckoutPageProps = {
  productsInCart: [Product],
  total: number,
  count: number,
  removeFromCart: RemoveFromCart
};

const MessageWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const BuyButton = styled(Button)`
  margin-bottom: 16px;
`;

const CheckoutPage = ({
  productsInCart: products,
  count,
  total,
  removeFromCart
}: CheckoutPageProps) => (
  <Container>
    {products.length < 1 ? (
      <Message>Looks like you do not have any items in your cart</Message>
    ) : (
      <>
        <MessageWrapper>
          <BuyButton>Buy Now</BuyButton>
          <Message>Total Credits Due: {total.toLocaleString()} credits</Message>
          <Message>Total Ship Quantity: {count}</Message>
        </MessageWrapper>
        <Grid columns="repeat(auto-fill, minmax(250px, 1fr))">
          {products.map(product => (
            <Cell key={product.name}>
              <CartListing product={product} remove={removeFromCart} />
            </Cell>
          ))}
        </Grid>
      </>
    )}
  </Container>
);

export default withCart(CheckoutPage);
