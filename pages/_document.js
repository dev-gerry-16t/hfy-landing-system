import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    /**
     * Here we use _document.js to add a "lang" propery to the HTML object if
     * one is set on the page.
     **/
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
