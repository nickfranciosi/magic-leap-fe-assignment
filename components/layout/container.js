// @flow
import * as React from 'react';
import styled from 'styled-components';
import dimensions from '../../styles/dimensions';

type ContainerProps = {
  children: any
};

const ContainerBoundry = styled.div`
  max-width: ${dimensions.maxWidth}px;
  margin: 0 auto;

  @media (max-width: ${dimensions.maxWidth}px) {
    padding: 0 24px;
  }
`;

const Container = ({ children }: ContainerProps) => (
  <ContainerBoundry>{children}</ContainerBoundry>
);

export default Container;
