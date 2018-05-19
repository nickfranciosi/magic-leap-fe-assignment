import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const CountIndicator = styled.div`
  background-color: ${colors.alert};
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: ${colors.primaryText};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -5px;
  right: -2px;
  font-size: ${fonts.sizes.detail};
  font-family: ${fonts.fontFamilies.primary};
`;

export default CountIndicator;
