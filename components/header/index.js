// @flow
import React from 'react';
import Link from 'next/link';
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

const SiteLogo = styled.img`
  width: 75px;
  display: inline;
`;

const SiteTitle = styled.h1`
  display: inline;
`;

const Header = ({ siteTitle }: HeaderProps) => (
  <HeaderWrapper>
    <Container>
      <Link href="/">
        <div>
          <SiteLogo src="/static/images/Watto.png" alt="Watto" />
          <SiteTitle>{siteTitle}</SiteTitle>
        </div>
      </Link>
    </Container>
  </HeaderWrapper>
);

export default Header;
