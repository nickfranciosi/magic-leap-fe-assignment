/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import AvatarLogo from '../index';

describe('AvatarLogo', () => {
  test('it should render', () => {
    const tree = renderer.create(<AvatarLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it should accept a size prop', () => {
    const tree = renderer.create(<AvatarLogo size={5} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('width', '5px');
    expect(tree).toHaveStyleRule('height', '5px');
  });

  test('it should accept an avatar prop', () => {
    const tree = renderer
      .create(<AvatarLogo avatar="/path/to/image" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule(
      'background',
      "url('/path/to/image') no-repeat",
      { modifier: ':after' }
    );
  });
});
