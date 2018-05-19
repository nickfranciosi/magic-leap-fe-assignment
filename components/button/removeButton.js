import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import timings from '../../styles/timings';
import zIndex from '../../styles/zIndex';

const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.alert};
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: ${zIndex.above};
  font-family: ${fonts.fontFamilies.primary};
  font-size: ${fonts.sizes.base};
  text-transform: uppercase;
  letter-spacing: 1.2px;
  cursor: pointer;
  &:after {
    content: 'Remove';
    display: inline;
    opacity: 0;
    margin-left: 4px;
    font-size: 0.75em;
    transition: opacity ${timings.default} ease;
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;

export default RemoveButton;
