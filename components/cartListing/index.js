// @flow
import React from 'react';
import styled from 'styled-components';
import ProductListing from '../productListing';
import { RemoveButton } from '../button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import zIndex from '../../styles/zIndex';

type CartListingProps = {
  product: Product,
  remove: RemoveFromCart
};

const ListingWrapper = styled.div`
  position: relative;
`;

const QuantityCount = styled.div`
  position: absolute;
  color: ${colors.darkText};
  font-family: ${fonts.fontFamilies.primary};
  text-transform: uppercase;
  font-size: ${fonts.sizes.base};
  background: ${colors.backgroundLight};
  top: 8px;
  right: 8px;
  padding: 8px;
  z-index: ${zIndex.above};
`;

const CartListing = ({ product, remove }: CartListingProps) => (
  <ListingWrapper>
    <QuantityCount>QTY: {product.quantity}</QuantityCount>
    <RemoveButton onClick={() => remove(product.name)}>X</RemoveButton>
    <ProductListing {...product} />
  </ListingWrapper>
);

export default CartListing;
