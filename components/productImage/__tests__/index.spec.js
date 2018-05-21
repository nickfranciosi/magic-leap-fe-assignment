/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ProductImage from '../index';
import breakpoints from '../../../styles/breakpoints';

describe('ProductImage', () => {
  test('it should render', () => {
    const tree = renderer.create(<ProductImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it should have min-height at mobile breakpoint', () => {
    const tree = renderer.create(<ProductImage />).toJSON();
    expect(tree).toHaveStyleRule('min-height', `250px`, {
      media: `(max-width:${breakpoints.tablet})`
    });
  });
});
