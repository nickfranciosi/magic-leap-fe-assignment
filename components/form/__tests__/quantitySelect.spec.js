/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import QuantitySelect from '../quantitySelect';

const setup = () => {
  const props = {
    handleChange: jest.fn()
  };

  const enzymeWrapper = mount(<QuantitySelect {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('QuantitySelect', () => {
  test('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('select')).toBeTruthy();
  });

  test('should fire handleChange prop', () => {
    const { enzymeWrapper, props } = setup();

    const selectElem = enzymeWrapper.find('select');
    selectElem.props().onChange();
    expect(props.handleChange.mock.calls.length).toBe(1);
  });
});
