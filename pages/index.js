// @flow
import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../store';
import ProductListing from '../components/productListing';

type IndexProps = {
  products: [Product]
};

const IndexPage = ({ products }: IndexProps) => (
  <div>
    {products.map(product => (
      <ProductListing key={product.name} {...product} />
    ))}
  </div>
);

IndexPage.getInitialProps = async ({ store, isServer }) => {
  if (isServer) {
    await store.dispatch(getProducts());
  }
  const { products } = await store.getState();
  const hasProductsLoaded = products.length;

  if (!hasProductsLoaded) {
    await store.dispatch(getProducts());
  }
};

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(IndexPage);
