import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import Header from '../components/header';
import baseStyles from '../styles/baseStyles';
import Background from '../components/background';

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
          <Header siteTitle="Watto's Spaceship Emporium" />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);
