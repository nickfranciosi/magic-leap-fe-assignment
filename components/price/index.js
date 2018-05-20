// @flow
import styled from 'styled-components';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const Price = styled.h3`
  font-size: ${fonts.sizes.header};
  background-color: ${colors.backgroundLight};
  width: auto;
  color: ${colors.darkText};
  padding: 16px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 26%,
    rgba(255, 255, 255, 0.04) 70%,
    rgba(255, 255, 255, 0.02) 71%,
    rgba(255, 255, 255, 0) 72%,
    rgba(255, 255, 255, 0) 81%
  );
`;

export default Price;
