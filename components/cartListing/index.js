// @flow
import React from 'react';
import styled from 'styled-components';
import ProductListing from '../productListing';
import QuantityController from '../quantityController';
import { RemoveButton } from '../button';

type CartListingProps = {
  product: Product,
  remove: RemoveFromCart,
  add: AddToCart
};

const ListingWrapper = styled.div`
  position: relative;
`;

const CartListing = ({ product, add, remove }: CartListingProps) => (
  <ListingWrapper>
    <QuantityController
      add={add}
      remove={remove}
      productKey={product.name}
      quantity={product.quantity || 0}
    />
    <RemoveButton onClick={() => remove(product.name)}>X</RemoveButton>
    <ProductListing {...product} />
  </ListingWrapper>
);

export default CartListing;
