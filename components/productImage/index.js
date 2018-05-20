// @flow
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

const ProductImage = styled.img`
  max-width: 100%;
  width: 40vw;
  height: auto;
  object-fit: cover;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100vw;
  }
`;

export default ProductImage;
