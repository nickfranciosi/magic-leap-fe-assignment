// @flow
import React from 'react';
import 'isomorphic-unfetch';

type ShopPagePros = {
  product: Product
};

const ShopPage = ({ product }: ShopPagePros) => (
  <div>{product.name} detail page</div>
);

ShopPage.getInitialProps = async ({ query: { name } }) => {
  // eslint-disable-next-line no-undef
  const res = await fetch('http://demo7475333.mockable.io/spaceships');
  const { products } = await res.json();

  const product = products.filter(p => p.name === name)[0];
  console.log({ name });
  console.log({ product });
  return { product };
};

export default ShopPage;
