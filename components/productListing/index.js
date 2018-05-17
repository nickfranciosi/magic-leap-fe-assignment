// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Title = styled.h2`
  color: ${colors.callouText};
  size: 23px;
`;

const Wrapper = styled.div`
  border: ${colors.backgroundMain};
  width: 100%;
  height: auto;
  min-height: 40px;
  border: 1px solid ${colors.border};
  display: flex:
  align-items: center;
  justify-content: center;
`;

export default ({ name }: Product) => (
  <Link prefetch href={`/shop?name=${name}`} as={`/shop/${name}`}>
    <Wrapper>
      <Title>{name}</Title>
    </Wrapper>
  </Link>
);
