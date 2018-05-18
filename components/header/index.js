// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Container } from '../layout';
import AvatarLogo from '../avatarLogo';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

type HeaderProps = {
  siteTitle: string
};

const HeaderWrapper = styled.header`
  background-color: transparent;
  border-bottom: 3px solid ${colors.callout};
  color: ${colors.primaryText};
  font-size: ${fonts.headerSize};
  margin-bottom: 72px;
  padding: 24px 0;
  z-index: 4;
`;

const SiteTitle = styled.h1`
  color: ${colors.subduedText};
  display: inline;
  font-family: 'Lato', Helvetica, sans-serif;
  font-size: 16px;
  letter-spacing: 1.2px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ siteTitle }: HeaderProps) => (
  <HeaderWrapper>
    <Container>
      <FlexContainer>
        <FlexContainer>
          <Link href="/">
            <AvatarLogo size={55} avatar="/static/images/Watto.png" />
          </Link>
          <Link href="/">
            <SiteTitle>{siteTitle}</SiteTitle>
          </Link>
        </FlexContainer>
        <div>
          <Link href="/checkout">
            <i>cart</i>
          </Link>
        </div>
      </FlexContainer>
    </Container>
  </HeaderWrapper>
);

export default Header;
