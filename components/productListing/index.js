// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import colors from '../../styles/colors';

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
  font-family: 'Space Mono', Helvetica, sans-serif;
  position: absolute;
  bottom: 24px;
  left: 6px;
  font-size: 29px;
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.67;
  z-index: 1;
  transition: opacity 300ms ease;
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
  <Link prefetch href={`/shop?name=${name}`} as={`/shop/${name}`}>
    <Wrapper src={name}>
      <Gradient />
      <Title>{name}</Title>
    </Wrapper>
  </Link>
);
