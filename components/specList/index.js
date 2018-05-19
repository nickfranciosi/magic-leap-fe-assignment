// @flow
import React from 'react';
import styled from 'styled-components';
import Spec from './spec';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

type SpecListProps = {
  product: Product
};

const Wrapper = styled.div`
  font-size: ${fonts.sizes.medium};
  color: ${colors.primaryText};
  font-family: ${fonts.fontFamilies.secondary};
`;

const TechSpecs = styled.div`
  font-size: 0.75em;
  padding-left: 8px;
`;

const renderTechSpecs = product =>
  Object.keys(product.techspecs).map(key => (
    <Spec title={key} key={key} value={product.techspecs[key]} />
  ));

const SpecList = ({ product }: SpecListProps) => (
  <Wrapper>
    <Spec title="Manufacturer" value={product.manufacturer} />
    <Spec title="Class" value={product.class} />
    <TechSpecs>{renderTechSpecs(product)}</TechSpecs>
  </Wrapper>
);

export default SpecList;
