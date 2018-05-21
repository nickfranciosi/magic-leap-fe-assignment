// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Grid, Cell } from '../components/layout';
import CartListing from '../components/cartListing';
import { Button } from '../components/button';
import { Message } from '../components/text';
import withCart from '../containers/withCart';

type CheckoutPageProps = {
  productsInCartWithQuantity: Product[],
  total: number,
  count: number,
  removeFromCart: RemoveFromCart,
  addToCart: AddToCart,
  checkoutCart: Function
};

type CheckoutPageState = {
  itemsSold: boolean
};

const MessageWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const BuyButton = styled(Button)`
  margin-bottom: 16px;
`;

class CheckoutPage extends Component<CheckoutPageProps, CheckoutPageState> {
  state = {
    itemsSold: false
  };

  handlePurchase = () => {
    this.props.checkoutCart();
    this.setState({
      itemsSold: true
    });
  };

  render() {
    const {
      productsInCartWithQuantity: products,
      count,
      total,
      removeFromCart,
      addToCart
    } = this.props;

    const { itemsSold } = this.state;
    return (
      <Container>
        {products.length < 1 && !itemsSold ? (
          <Message>Looks like you do not have any items in your cart</Message>
        ) : (
          <>
            <MessageWrapper>
              {itemsSold && (
                <Message>Congrats! Your ships are on their way.</Message>
              )}
              <BuyButton onClick={this.handlePurchase}>Buy Now</BuyButton>
              <Message>
                Total Credits Due: {total.toLocaleString()} credits
              </Message>
              <Message>Total Ship Quantity: {count}</Message>
            </MessageWrapper>
            <Grid columns="repeat(auto-fill, minmax(250px, 1fr))">
              {products.map(product => (
                <Cell key={product.name}>
                  <CartListing
                    product={product}
                    remove={removeFromCart}
                    add={addToCart}
                  />
                </Cell>
              ))}
            </Grid>
          </>
        )}
      </Container>
    );
  }
}

export default withCart(CheckoutPage);
