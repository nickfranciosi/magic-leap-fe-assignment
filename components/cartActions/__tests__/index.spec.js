/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { CartActions } from '../index';

const setup = () => {
  const props = {
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    handleQuantityChange: jest.fn(),
    product: { name: '123' },
    quantity: 1
  };

  const enzymeWrapper = mount(<CartActions {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('CartActions', () => {
  test('should render self and subcomponents', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.find('button').text()).toBe('Add To Cart');
    const quantitySelectProps = enzymeWrapper.find('QuantitySelect').props();
    expect(quantitySelectProps.handleChange).toBe(props.handleQuantityChange);
  });

  test('it should show remove from cart if is in cart', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.contains('Remove from Cart')).toBe(false);
    enzymeWrapper.setProps({ isInCart: true });
    expect(enzymeWrapper.contains('Remove from Cart')).toBe(true);
  });

  test('it should trigger add to cart', () => {
    const { enzymeWrapper, props } = setup();

    const addButton = enzymeWrapper.find('button');
    addButton.props().onClick();
    expect(props.addToCart.mock.calls.length).toBe(1);
  });

  test('it should trigger remove from cart', () => {
    const { enzymeWrapper, props } = setup();

    enzymeWrapper.setProps({ isInCart: true });
    const removeButton = enzymeWrapper.find('button').at(1);
    removeButton.props().onClick();
    expect(props.removeFromCart.mock.calls.length).toBe(1);
  });
});
