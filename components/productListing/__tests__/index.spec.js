/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ProductListing from '../index';

describe('ProductListing', () => {
  test('it should render', () => {
    const tree = renderer
      .create(<ProductListing product={{ name: '123' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
