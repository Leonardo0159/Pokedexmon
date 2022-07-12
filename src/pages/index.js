import Head from 'next/head'
import { Ads } from '../components/Ads'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import ReactGA from 'react-ga4';
import { useEffect, useState } from 'react'
import { BannerHome } from '../components/BannerHome';
import { BannerLegendary } from '../components/BannerLegendary';
import { BannerMythical } from '../components/BannerMythical';
import { TypesController } from '../components/TypesController';
import { Loading } from '../components/Loading';

ReactGA.initialize('G-XS8VZGMJ08');
export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ReactGA.send("pageview");
  })

  return (
    <div>
      <Head>
        <title>Pokédexmon | Pokédex | Pokémon</title>
        <meta name="description" content="See everything about your favorite pokemons in the best pokedex and be the best pokemon trainer in the world! Gotta catch em all!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Pokédexmon" />
        <meta property="og:description" content="See everything about your favorite pokemons in the best pokedex and be the best pokemon trainer in the world! Gotta catch em all!" />
        <meta property="og:url" content="https://www.pokedexmon.com/" />
        <meta property="og:site_name" content="Pokédexmon" />
        <meta property="og:image" content="/pokeball.png" />
        <meta property="og:image:width" content="183" />
        <meta property="og:image:height" content="224" />
      </Head>

      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Ads />
          <BannerHome setLoading={setLoading}/>
          <BannerLegendary setLoading={setLoading}/>
          <BannerMythical setLoading={setLoading}/>
          <TypesController type="home" setLoading={setLoading}/>
          <Ads />
          <Footer />
        </>
      )}

    </div>
  )
}
