/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Background from '../index';

describe('Background', () => {
  test('it should render', () => {
    const tree = renderer.create(<Background />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it should fill the view width', () => {
    const tree = renderer.create(<Background />).toJSON();
    expect(tree).toHaveStyleRule('width', '100vw');
  });
});
