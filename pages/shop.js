// @flow
import React from 'react';
import { getProducts } from '../store';

type ShopPagePros = {
  product: Product
};

const ShopPage = ({ product }: ShopPagePros) => (
  <div>{product.name} detail page</div>
);

ShopPage.getInitialProps = async ({ store, isServer, query: { name } }) => {
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
};

export default ShopPage;
