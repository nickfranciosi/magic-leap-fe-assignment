// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Grid, Cell } from '../components/layout';
import CartActions from '../components/cartActions';
import ProductImage from '../components/productImage';
import SpecList from '../components/specList';
import { SubTitle } from '../components/text';
import Price from '../components/price';
import colors from '../styles/colors';
import { getProducts } from '../store';
import fonts from '../styles/fonts';

type ShopPagePros = {
  product: Product
};

type ShopPageState = {
  quantity: number
};

// TODO: move these styles for spec sizing
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
        <Grid columns={2}>
          <Cell>
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
          </Cell>
          <Cell>
            <ProductImage src={`/static/images/products/${product.name}.jpg`} />
          </Cell>
        </Grid>
      </Container>
    );
  }
}

export default ShopPage;
