// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import zIndex from '../../styles/zIndex';

type QuantityControllerProps = {
  productKey: string,
  quantity: number,
  remove: RemoveFromCart,
  add: AddToCart
};

const QuantityTag = styled.div`
  position: absolute;
  color: ${colors.darkText};
  font-family: ${fonts.fontFamilies.primary};
  text-transform: uppercase;
  font-size: ${fonts.sizes.base};
  background: ${colors.backgroundLight};
  top: 8px;
  right: 8px;
  padding: 8px;
  z-index: ${zIndex.above};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const QuantityButton = styled.button`
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
`;

class QuantityController extends Component<QuantityControllerProps> {
  handleDecrement = () => {
    const { add, remove, quantity, productKey } = this.props;
    if (quantity && quantity > 1) {
      add(productKey, -1);
    } else {
      remove(productKey);
    }
  };

  handleIncrement = () => {
    const { add, productKey } = this.props;
    add(productKey, 1);
  };

  render() {
    const { quantity } = this.props;
    return (
      <QuantityTag>
        <QuantityButton onClick={this.handleIncrement}>+</QuantityButton>
        <p>Qty: {quantity}</p>
        <QuantityButton onClick={this.handleDecrement}>-</QuantityButton>
      </QuantityTag>
    );
  }
}

export default QuantityController;
