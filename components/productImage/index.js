// @flow
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

const ProductImage = styled.div`
  flex: 1;
  margin-left: 26px;
  height: auto;
  object-fit: cover;
  background: url('${({ src }) => src}') no-repeat;
  background-position: center;
  background-size: contain;
  @media (max-width: ${breakpoints.tablet}) {
   min-height: 250px;
   margin: 0 0 16px 0;
  }
`;

export default ProductImage;
