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
  border: 2px solid ${colors.callout};
  position: relative;
  cursor: pointer;
  background: url('/static/images/products/${({ src }) => src}.jpg') no-repeat;
  background-size: cover;
`;

const Title = styled.h2`
  color: ${colors.callout};
  font-family: 'Raleway', Helvetica, sans-serif;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 8px;
  size: 23px;
`;

export default ({ name }: Product) => (
  <Link prefetch href={`/shop?name=${name}`} as={`/shop/${name}`}>
    <Wrapper src={name}>
      <Title>{name}</Title>
    </Wrapper>
  </Link>
);
