/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import SpecList from '../index';
import Spec from '../specItem';

const setup = () => {
  const props = {
    product: {
      class: 'Test Class',
      manufacturer: 'Cool Builder',
      techspecs: {
        hull: 'Titanium alloy hull'
      }
    }
  };

  const enzymeWrapper = mount(<SpecList {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('SpecList', () => {
  test('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find(Spec)).toHaveLength(3);
  });
});
