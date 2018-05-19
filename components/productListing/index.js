// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import timings from '../../styles/timings';
import zIndex from '../../styles/zIndex';

const Wrapper = styled.div`
  border: ${colors.backgroundMain};
  width: 100%;
  height: auto;
  min-height: 250px;
  border: 1px solid ${colors.callout};
  position: relative;
  cursor: pointer;
  background: url('/static/images/products/${({ src }) => src}.jpg') no-repeat;
  background-size: cover;
  object-fit: cover;
`;

const Title = styled.h3`
  color: ${colors.primaryText};
  font-family: ${fonts.fontFamilies.accent};
  position: absolute;
  bottom: 24px;
  left: 6px;
  font-size: ${fonts.sizes.header};
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.67;
  z-index: ${zIndex.default};
  transition: opacity ${timings.default} ease;
  background-image: linear-gradient(
    to right top,
    #000000,
    rgba(0, 0, 0, 0) 56%
  );
  &:hover {
    opacity: 0;
  }
`;

export default ({ name }: Product) => (
  <Link href={`/shop?name=${name}`} as={`/shop/${name}`}>
    <Wrapper src={name}>
      <Gradient />
      <Title>{name}</Title>
    </Wrapper>
  </Link>
);
