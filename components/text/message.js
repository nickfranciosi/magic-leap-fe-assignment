// @flow
import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const Message = styled.h2`
  font-size: 40px;
  font-family: ${fonts.fontFamilies.primary};
  color: ${colors.primaryText};
  margin-bottom: 16px;
`;

export default Message;
