import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

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
          <link
            href="https://fonts.googleapis.com/css?family=Lato|Raleway|Space+Mono"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/static/images/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="/static/images/favicon.ico"
            type="image/x-icon"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
