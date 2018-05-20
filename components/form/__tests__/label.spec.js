/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Label from '../label';

describe('Price', () => {
  test('it should render', () => {
    const tree = renderer.create(<Label />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it should be uppercase', () => {
    const tree = renderer.create(<Label />).toJSON();
    expect(tree).toHaveStyleRule('text-transform', 'uppercase');
  });
});
