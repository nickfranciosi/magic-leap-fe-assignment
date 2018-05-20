/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import PrimaryButton from '../primaryButton';
import RemoveButton from '../removeButton';
import colors from '../../../styles/colors';

describe('PrimaryButton', () => {
  test('it should render', () => {
    const tree = renderer.create(<PrimaryButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it should be transparent', () => {
    const tree = renderer.create(<PrimaryButton />).toJSON();
    expect(tree).toHaveStyleRule('background-color', 'transparent');
  });
});

describe('RemoveButton', () => {
  test('it should render', () => {
    const tree = renderer.create(<RemoveButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it should have alert color', () => {
    const tree = renderer.create(<RemoveButton />).toJSON();
    expect(tree).toHaveStyleRule('color', colors.alert);
  });

  test('it should show default text', () => {
    const tree = renderer.create(<RemoveButton />).toJSON();
    expect(tree).toHaveStyleRule('content', "'Remove All'", {
      modifier: ':after'
    });
  });

  test('it should accept text prop', () => {
    const tree = renderer.create(<RemoveButton text="Test Text" />).toJSON();
    expect(tree).toHaveStyleRule('content', 'Test Text', {
      modifier: ':after'
    });
  });
});
