// @flow
import React from 'react';
import 'isomorphic-unfetch';
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

IndexPage.getInitialProps = async () => {
  // eslint-disable-next-line no-undef
  const res = await fetch('http://demo7475333.mockable.io/spaceships');
  const { products } = await res.json();
  return { products };
};

export default IndexPage;
