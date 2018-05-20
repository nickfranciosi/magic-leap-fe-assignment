/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import CartListing from '../index';

const setup = () => {
  const props = {
    add: jest.fn(),
    remove: jest.fn(),
    product: { name: '123', quantity: 2 }
  };

  const enzymeWrapper = mount(<CartListing {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('CartListing', () => {
  test('should render self and subcomponents', () => {
    const { enzymeWrapper, props } = setup();

    const quantityControllerProps = enzymeWrapper
      .find('QuantityController')
      .props();
    expect(quantityControllerProps.quantity).toBe(props.product.quantity);
  });

  test('should have a remove button', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.contains('X')).toBe(true);
    const removeButton = enzymeWrapper.find('button').at(2);
    removeButton.props().onClick();
    expect(props.remove.mock.calls.length).toBe(1);
  });
});
