// @flow
import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Cell } from '../components/layout';
import ProductListing from '../components/productListing';
import Button from '../components/button';
import withCart from '../containers/withCart';
import colors from '../styles/colors';

type CheckoutPageProps = {
  productsInCart: [Product],
  total: number,
  count: number,
  removeFromCart: Function
};

type CartListingProps = {
  product: Product,
  remove: Function
};

const Message = styled.h2`
  font-size: 40px;
  font-family: 'Lato', sans-serif;
  color: ${colors.primaryText};
  margin-bottom: 16px;
`;

const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.alert};
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 5;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  cursor: pointer;
  &::after {
    content: 'Remove';
    display: inline;
    opacity: 0;
    margin-left: 4px;
    font-size: 0.75em;
    transition: opacity 300ms ease;
  }
  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;

const MessageWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const ListingWrapper = styled.div`
  position: relative;
`;

const BuyButton = styled(Button)`
  margin-bottom: 16px;
`;

const CartListing = ({ product, remove }: CartListingProps) => (
  <ListingWrapper>
    <RemoveButton onClick={() => remove(product.name)}>X</RemoveButton>
    <ProductListing {...product} />
  </ListingWrapper>
);

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
