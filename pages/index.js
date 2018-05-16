// @flow
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`;

type IndexProps = {
  foo: string
};

export default ({ foo }: IndexProps) => (
  <div>
    <Title>{foo}</Title>
  </div>
);
