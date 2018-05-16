// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h2`
  color: red;
  size: 23px;
`;

export default ({ name }: Product) => (
  <Link prefetch href={`/shop?name=${name}`} as={`/shop/${name}`}>
    <Title>{name}</Title>
  </Link>
);
