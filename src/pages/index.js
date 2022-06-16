import Head from 'next/head'
import Script from "next/script";
import { Ads } from '../components/Ads'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { PokemonList } from '../components/PokemonList'
import ReactGA from 'react-ga4';
import { useEffect } from 'react'

ReactGA.initialize('G-XS8VZGMJ08');
export default function Home() {

  useEffect(() => {
    ReactGA.send("pageview");
  })

  return (
    <div>
      <Head>
        <title>Pokédexmon</title>
        <meta name="description" content="See everything about your favorite pokémons in the best pokédex and be the best pokémon trainer in the world!" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          id="Adsense-id" async
          onError={(e) => { console.error("Script failed to load", e); }}
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9645579603385719"
          crossorigin="anonymous"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Pokédexmon" />
        <meta property="og:description" content="See everything about your favorite pokémons in the best pokédex and be the best pokémon trainer in the world!" />
        <meta property="og:url" content="https://pokedexmon.vercel.app/" />
        <meta property="og:site_name" content="Pokédexmon" />
        <meta property="og:image" content="/pokeball.png" />
        <meta property="og:image:width" content="183" />
        <meta property="og:image:height" content="224" />
      </Head>

      <Header />
      <Ads />
      <PokemonList />
      <Ads />
      <Footer />

    </div>
  )
}
