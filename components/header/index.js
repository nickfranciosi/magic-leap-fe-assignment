// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Container } from '../layout';
import AvatarLogo from '../avatarLogo';
import ConnectedShoppingCart from '../shoppingCart';
import { MainTitle } from '../text';
import colors from '../../styles/colors';
import zIndex from '../../styles/zIndex';
import breakpoints from '../../styles/breakpoints';

type HeaderProps = {
  siteTitle: string
};

const HeaderWrapper = styled.header`
  background-color: transparent;
  border-bottom: 3px solid ${colors.callout};
  margin-bottom: 72px;
  padding: 24px 0;
  z-index: ${zIndex.below};
  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 32px;
  }
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
          <Link href="/" prefetch>
            <AvatarLogo size={55} avatar="/static/images/Watto.png" />
          </Link>
          <Link href="/">
            <MainTitle>{siteTitle}</MainTitle>
          </Link>
        </FlexContainer>
        <ConnectedShoppingCart />
      </FlexContainer>
    </Container>
  </HeaderWrapper>
);

export default Header;
