import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();
    // Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    // Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();
    // Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src="https://cdn.splitbee.io/sb.js"></script>
          <link
            rel="stylesheet"
            href="/leaflet/leaflet@1.7.1/dist/leaflet.css"
          />
          <script src="/leaflet/leaflet@1.7.1/dist/leaflet.js"></script>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
          {/* Output the styles in the head  */}
          {this.props.styleTags}
          <link rel="icon" href="/khoa.png" />
          <meta name="description" content="Khoa Phan Website"></meta>
        </Head>

        {/* Reset margin from body default css */}
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
