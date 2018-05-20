/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import QuantityController from '../index';

const setup = () => {
  const props = {
    add: jest.fn(),
    remove: jest.fn(),
    productKey: '123',
    quantity: 2
  };

  const enzymeWrapper = mount(<QuantityController {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('QuantityController', () => {
  test('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(
      enzymeWrapper
        .find('button')
        .at(0)
        .text()
    ).toBe('+');
  });

  test('it should trigger add to cart', () => {
    const { enzymeWrapper, props } = setup();

    const addButton = enzymeWrapper.find('button').at(0);
    addButton.props().onClick();
    expect(props.add.mock.calls.length).toBe(1);
    expect(props.add.mock.calls[0][0]).toBe('123');
    expect(props.add.mock.calls[0][1]).toBe(1);
  });

  test('it should trigger add to cart with negative number', () => {
    const { enzymeWrapper, props } = setup();

    const removeButton = enzymeWrapper.find('button').at(1);
    removeButton.props().onClick();
    expect(props.add.mock.calls.length).toBe(1);
    expect(props.add.mock.calls[0][0]).toBe('123');
    expect(props.add.mock.calls[0][1]).toBe(-1);
  });

  test('it should trigger remove from cart on last item', () => {
    const { enzymeWrapper, props } = setup();

    const removeButton = enzymeWrapper.find('button').at(1);
    enzymeWrapper.setProps({ quantity: 1 });
    removeButton.props().onClick();
    expect(props.remove.mock.calls.length).toBe(1);
    expect(props.remove.mock.calls[0][0]).toBe('123');
  });
});
