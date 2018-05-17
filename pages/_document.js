import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Background from '../components/background';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const ssrSheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      ssrSheet.collectStyles(<App {...props} />)
    );
    const styleTags = ssrSheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Magic Leap</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Background />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
