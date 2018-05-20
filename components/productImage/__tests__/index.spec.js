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

  test('it should have have max-width', () => {
    const tree = renderer.create(<ProductImage />).toJSON();
    expect(tree).toHaveStyleRule('max-width', `100%`);
  });

  test('it should be full width at mobile breakpoint', () => {
    const tree = renderer.create(<ProductImage />).toJSON();
    expect(tree).toHaveStyleRule('width', `100vw`, {
      media: `(max-width:${breakpoints.tablet})`
    });
  });
});
