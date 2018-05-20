/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Price from '../index';
import colors from '../../../styles/colors';

describe('Price', () => {
  test('it should render', () => {
    const tree = renderer.create(<Price />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it should have dark text on light bg', () => {
    const tree = renderer.create(<Price />).toJSON();
    expect(tree).toHaveStyleRule('color', colors.darkText);
    expect(tree).toHaveStyleRule('background-color', colors.backgroundLight);
  });
});
