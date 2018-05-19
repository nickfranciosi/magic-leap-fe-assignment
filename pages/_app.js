import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import baseStyles from '../styles/baseStyles';
import Background from '../components/background';
import Header from '../components/header';

export default withRedux(initStore)(
  class WattoApp extends App {
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
              <Header siteTitle="Watto's Spaceship Emporium" />
              <Component {...pageProps} />
            </>
          </Provider>
        </Container>
      );
    }
  }
);
