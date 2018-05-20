/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import MainTitle from '../mainTitle';
import Message from '../message';
import SubTitle from '../subTitle';
import fonts from '../../../styles/fonts';

describe('MainTitle', () => {
  test('it should render', () => {
    const tree = renderer.create(<MainTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it should have a larger leading', () => {
    const tree = renderer.create(<MainTitle />).toJSON();
    expect(tree).toHaveStyleRule('letter-spacing', '2.5px');
  });
});

describe('Message', () => {
  test('it should render', () => {
    const tree = renderer.create(<Message />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SubTitle', () => {
  test('it should render', () => {
    const tree = renderer.create(<SubTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it should have a header font size', () => {
    const tree = renderer.create(<SubTitle />).toJSON();
    expect(tree).toHaveStyleRule('font-size', fonts.sizes.header);
  });
});
