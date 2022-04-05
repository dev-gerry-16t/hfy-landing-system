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
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/21737012.js"
          ></script>
        </body>
      </Html>
    );
  }
}
