// @flow
import styled from 'styled-components';
import colors from '../../styles/colors';
import timings from '../../styles/timings';
import breakpoints from '../../styles/breakpoints';

const AvatarLogo = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${colors.backgroundLight};
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin-right: 16px;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    font-size: ${({ size }) => size}px;
    bottom: -0.25em;
    background: url('${({ avatar }) => avatar}') no-repeat;
    background-size: 100%;
    transition: transform ${timings.default} ease-in-out;
    transform: translate(0) scale(1);
  }
  &:hover {
    &:after{
      transform: translateY(-.05em) scale(1.03);
    }
  }
   @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export default AvatarLogo;
