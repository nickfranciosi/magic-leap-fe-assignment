// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import withCart from '../containers/withCart';
import { Container, Grid, Cell } from '../components/layout';
import Button from '../components/button';
import colors from '../styles/colors';
import { getProducts } from '../store';

type ShopPagePros = {
  product: Product,
  isInCart: boolean,
  addToCart: any,
  removeFromCart: any
};

type ShopPageState = {
  quantity: number
};

type SpecProps = {
  title: string,
  value: any
};

const ProductImage = styled.img`
  max-width: 100%;
  width: 50vw;
  height: auto;
  object-fit: cover;
`;

const Label = styled.label`
  color: ${colors.callToAction};
  text-transform: uppercase;
  font-size: 13px;
  margin-bottom: 4px;
  font-family: 'Lato', sans-serif;
  letter-spacing: -1.1px;
`;

const CartActions = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

const CartQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
`;

const Price = styled.h3`
  margin-bottom: 16px;
`;

const ProductDetails = styled.section`
  font-size: 26px;
  color: ${colors.primaryText};
  font-family: 'Raleway', Helvetica, sans-serif;
`;

const ProductTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 32px;
`;

const SpecTitle = styled.p`
  font-size: 0.65em;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const SpecValue = styled.span`
  color: ${colors.subduedText};
  text-transform: none;
`;

const Spec = ({ title, value }: SpecProps) => (
  <SpecTitle>
    {title}: <SpecValue>{value}</SpecValue>
  </SpecTitle>
);

const TechSpec = styled.div`
  font-size: 0.85em;
  padding-left: 8px;
`;

const Unavailable = styled.h3`
  margin-bottom: 16px;
`;

class ShopPage extends Component<ShopPagePros, ShopPageState> {
  state = {
    quantity: 1
  };
  static async getInitialProps({ store, isServer, query: { name } }) {
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

  setQuantity = e => {
    this.setState({
      quantity: parseInt(e.target.value, 10)
    });
  };

  render() {
    const {
      product,
      isInCart,
      addToCart: add,
      removeFromCart: remove
    } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <Container>
          <Grid columns={2}>
            <Cell>
              <ProductDetails>
                <ProductTitle>{product.name}</ProductTitle>
                {product.price ? (
                  <>
                    <Price>{product.price}</Price>
                    <CartActions>
                      <CartQuantityWrapper>
                        <Label htmlFor="quantity">Qty:</Label>
                        <select
                          id="quantity"
                          name="quantity"
                          defaultValue={1}
                          onChange={this.setQuantity}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </CartQuantityWrapper>
                      <Button onClick={() => add(product.name, quantity)}>
                        Add To Cart
                      </Button>
                      {isInCart && (
                        <Button onClick={() => remove(product.name)}>
                          Remove from Cart
                        </Button>
                      )}
                    </CartActions>
                  </>
                ) : (
                  <Unavailable>Currently Unavailble</Unavailable>
                )}
                <Spec title="Manufacturer" value={product.manufacturer} />
                <Spec title="Class" value={product.class} />
                <TechSpec>
                  {Object.keys(product.techspecs).map(key => (
                    <Spec
                      title={key}
                      key={key}
                      value={product.techspecs[key]}
                    />
                  ))}
                </TechSpec>
              </ProductDetails>
            </Cell>
            <Cell>
              <ProductImage
                src={`/static/images/products/${product.name}.jpg`}
              />
            </Cell>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withCart(ShopPage);
