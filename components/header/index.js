// @flow
import React from 'react';
import styled from 'styled-components';
import { Container } from '../layout';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

type HeaderProps = {
  siteTitle: string
};

const HeaderWrapper = styled.header`
  background: ${colors.backgroundMain};
  padding: 42px 0;
  border-bottom: 1px solid ${colors.border};
  color: ${colors.primaryText};
  font-size: ${fonts.headerSize};
  z-index: 4;
`;

const Header = ({ siteTitle }: HeaderProps) => (
  <HeaderWrapper>
    <Container>
      <h1>{siteTitle}</h1>
    </Container>
  </HeaderWrapper>
);

export default Header;
