// @flow
import React from 'react';
import styled from 'styled-components';
import fonts from '../../styles/fonts';

type QuantitySelectProps = {
  handleChange: Function
};

const Select = styled.select`
  font-size: ${fonts.sizes.base};
`;

const QuantitySelect = ({ handleChange }: QuantitySelectProps) => (
  <Select
    id="quantity"
    name="quantity"
    defaultValue={1}
    onChange={handleChange}
  >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </Select>
);

export default QuantitySelect;
