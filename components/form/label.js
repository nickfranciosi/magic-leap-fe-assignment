// @flow
import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const Label = styled.label`
  color: ${colors.callToAction};
  text-transform: uppercase;
  font-size: ${fonts.sizes.detail};
  margin-bottom: 4px;
  font-family: ${fonts.fontFamilies.primary};
  letter-spacing: -1.1px;
`;

export default Label;
