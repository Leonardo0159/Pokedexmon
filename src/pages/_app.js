import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script id="Adsense-id" async
        onError={(e) => { console.error("Script failed to load", e); }}
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9645579603385719"
        crossorigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
