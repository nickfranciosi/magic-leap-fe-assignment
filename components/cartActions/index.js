// @flow
import React from 'react';
import styled from 'styled-components';
import withCart from '../../containers/withCart';
import { Button } from '../button';
import { Label, QuantitySelect } from '../form';

type CartActionsProps = {
  product: Product,
  addToCart: AddToCart,
  removeFromCart: RemoveFromCart,
  quantity: number,
  handleQuantityChange: Function,
  isInCart: boolean
};

const CartActionsWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

const CartQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
`;

const CartButton = styled(Button)`
  margin-left: 8px;
`;

const CartActions = ({
  product,
  addToCart: add,
  removeFromCart: remove,
  quantity,
  handleQuantityChange,
  isInCart
}: CartActionsProps) => (
  <CartActionsWrapper>
    <CartQuantityWrapper>
      <Label htmlFor="quantity">Qty:</Label>
      <QuantitySelect handleChange={handleQuantityChange} />
    </CartQuantityWrapper>
    <CartButton onClick={() => add(product.name, quantity)}>
      Add To Cart
    </CartButton>
    {isInCart && (
      <CartButton onClick={() => remove(product.name)}>
        Remove from Cart
      </CartButton>
    )}
  </CartActionsWrapper>
);

export default withCart(CartActions);
