import styled from 'styled-components';
import colors from '../../styles/colors';

const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${colors.callToAction};
  color: ${colors.callToAction};
  border-radius: 10%;
  font-size: 20px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  padding: 16px;
  letter-spacing: -1.1px;
  transition: background-color 200ms ease-in, color 200ms ease-in;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.callToAction};
    color: #000;
  }
`;

export default Button;
