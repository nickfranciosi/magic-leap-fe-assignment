// @flow
import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import timings from '../../styles/timings';

const PrimaryButton = styled.button`
  background-color: transparent;
  border: 1px solid ${colors.callToAction};
  color: ${colors.callToAction};
  font-size: ${fonts.sizes.base};
  text-transform: uppercase;
  font-family: ${fonts.fontFamilies.primary};
  padding: 16px;
  letter-spacing: -1.1px;
  transition: background-color ${timings.fast} ease-in,
    color ${timings.fast} ease-in;
  cursor: pointer;
  &:hover {
    background-color: ${colors.callToAction};
    color: ${colors.darkText};
  }
`;

export default PrimaryButton;
