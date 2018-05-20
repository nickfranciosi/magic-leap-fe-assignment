/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import CountIndicator from '../index';
import colors from '../../../styles/colors';

describe('CountIndicator', () => {
  test('it should render', () => {
    const tree = renderer.create(<CountIndicator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it should be round', () => {
    const tree = renderer.create(<CountIndicator />).toJSON();
    expect(tree).toHaveStyleRule('border-radius', '50%');
  });

  test('it should have show legible text', () => {
    const tree = renderer.create(<CountIndicator />).toJSON();
    expect(tree).toHaveStyleRule('color', colors.primaryText);
    expect(tree).toHaveStyleRule('background-color', colors.alert);
  });
});
