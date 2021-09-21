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
            dangerouslySetInnerHTML={{
              __html: `
            window.intercomSettings = {
              app_id: "brcs8dki"
            };
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/brcs8dki'
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/brcs8dki';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
            
          `,
            }}
          />
        </body>
      </Html>
    );
  }
}
