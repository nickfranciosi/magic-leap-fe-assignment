import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import withCart from '../containers/withCart';
import baseStyles from '../styles/baseStyles';
import Background from '../components/background';
import Header from '../components/header';

const HeaderWithCart = withCart(Header);

export default withRedux(initStore)(
  class MagicLeapApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      baseStyles();
      return (
        <Container>
          <Background />
          <Provider store={store}>
            <>
              <HeaderWithCart siteTitle="Watto's Spaceship Emporium" />
              <Component {...pageProps} />
            </>
          </Provider>
        </Container>
      );
    }
  }
);
