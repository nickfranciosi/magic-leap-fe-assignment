// @flow
import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

type SpecProps = {
  title: string,
  value: any
};

const SpecTitle = styled.p`
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const SpecValue = styled.span`
  color: ${colors.subduedText};
  text-transform: none;
`;

const Spec = ({ title, value }: SpecProps) => (
  <SpecTitle>
    {title}: <SpecValue>{value}</SpecValue>
  </SpecTitle>
);

export default Spec;
