// @flow
import React from 'react';
import styled from 'styled-components';
import ProductListing from '../productListing';
import { RemoveButton } from '../button';

type CartListingProps = {
  product: Product,
  remove: RemoveFromCart
};

const ListingWrapper = styled.div`
  position: relative;
`;

const CartListing = ({ product, remove }: CartListingProps) => (
  <ListingWrapper>
    <RemoveButton onClick={() => remove(product.name)}>X</RemoveButton>
    <ProductListing {...product} />
  </ListingWrapper>
);

export default CartListing;
