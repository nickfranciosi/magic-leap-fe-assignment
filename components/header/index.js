// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Container } from '../layout';
import AvatarLogo from '../avatarLogo';
import Cart from '../cart';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

type HeaderProps = {
  siteTitle: string,
  count: number
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
  font-family: 'Lato', Helvetica, sans-serif;
  font-size: 16px;
  letter-spacing: 1.2px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  transition: color 300ms ease;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ siteTitle, count }: HeaderProps) => (
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
        {/* TODO: Shoul maybe should expost cart data to cart component directly */}
        <Cart itemCount={count} />
      </FlexContainer>
    </Container>
  </HeaderWrapper>
);

export default Header;
