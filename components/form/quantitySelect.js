// @flow
import React from 'react';

type QuantitySelectProps = {
  handleChange: Function
};

const QuantitySelect = ({ handleChange }: QuantitySelectProps) => (
  <select
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
  </select>
);

export default QuantitySelect;
