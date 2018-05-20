// @flow
import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import timings from '../../styles/timings';

const MainTitle = styled.h1`
  color: ${colors.subduedText};
  font-family: ${fonts.fontFamilies.primary};
  font-size: ${fonts.sizes.base};
  letter-spacing: 1.2px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  transition: color ${timings.default} ease;
  cursor: pointer;
  &:hover {
    color: ${colors.primaryText};
  }
`;

export default MainTitle;
