// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../components/layout';
import CartActions from '../components/cartActions';
import ProductImage from '../components/productImage';
import SpecList from '../components/specList';
import { SubTitle } from '../components/text';
import Price from '../components/price';
import colors from '../styles/colors';
import { getProducts } from '../actions';
import fonts from '../styles/fonts';
import breakpoints from '../styles/breakpoints';

type ShopPagePros = {
  product: Product
};

type ShopPageState = {
  quantity: number
};

const ProductDetails = styled.section`
  font-size: ${fonts.sizes.medium};
  color: ${colors.primaryText};
  font-family: ${fonts.fontFamilies.secondary};
`;

const ProductTitle = styled(SubTitle)`
  margin-bottom: 32px;
`;

const ProductPrice = styled(Price)`
  margin-bottom: 32px;
`;

const UnavailableMessage = styled.h3`
  margin-bottom: 16px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column-reverse;
  }
`;
class ShopPage extends Component<ShopPagePros, ShopPageState> {
  state = {
    quantity: 1
  };
  static async getInitialProps({ store, isServer, query: { name } }: any) {
    if (isServer) {
      await store.dispatch(getProducts());
    }
    const { products } = await store.getState();
    const hasProductsLoaded = products.length;

    if (!hasProductsLoaded) {
      await store.dispatch(getProducts());
    }

    const product = products.find(p => p.name === name);
    return { product };
  }

  setQuantity = (e: any) => {
    this.setState({
      quantity: parseInt(e.target.value, 10)
    });
  };

  render() {
    const { product } = this.props;
    const { quantity } = this.state;
    return (
      <Container>
        <FlexContainer>
          <div>
            <>
              <ProductDetails>
                <ProductTitle>{product.name}</ProductTitle>
                {product.price ? (
                  <>
                    <ProductPrice>{product.price}</ProductPrice>
                    <CartActions
                      product={product}
                      handleQuantityChange={this.setQuantity}
                      quantity={quantity}
                    />
                  </>
                ) : (
                  <UnavailableMessage>Currently Unavailble</UnavailableMessage>
                )}
              </ProductDetails>
              <SpecList product={product} />
            </>
          </div>
          <ProductImage src={`/static/images/products/${product.name}.jpg`} />
        </FlexContainer>
      </Container>
    );
  }
}

export default ShopPage;
