import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";
import SRRProvider from 'react-bootstrap/SSRProvider'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script id="Adsense-id" async
        onError={(e) => { console.error("Script failed to load", e); }}
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9645579603385719"
        crossorigin="anonymous"
      />
      <Script id='Hotjar' strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3063378,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}}></Script>
      <SRRProvider>
        <Component {...pageProps} />
      </SRRProvider>
    </>
  )
}

export default MyApp
