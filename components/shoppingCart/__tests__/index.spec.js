/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { ShoppingCart } from '../index';
import CountIndicator from '../../countIndicator';

const setup = () => {
  const props = {
    count: 2
  };

  const enzymeWrapper = mount(<ShoppingCart {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('ShoppingCart', () => {
  test('should render self and subcomponents', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.find(CountIndicator).text()).toBe(`${props.count}`);
  });
});
