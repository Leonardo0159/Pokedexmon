import Head from 'next/head'
import { useState } from 'react';
import { Ads } from '../../components/Ads';
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LegendaryList } from '../../components/LegendaryList';
import { Loading } from '../../components/Loading';

export default function Mythical() {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Head>
                <title>Pokédexmon | Mythical Pokemons</title>
                <meta name="description" content="See everything about your favorite pokemons in the best pokedex and be the best pokemon trainer in the world! Gotta catch em all!" />
                <link rel="icon" href="/favicon.ico" />
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
                    <LegendaryList rarity="mythical" setLoading={setLoading}/>
                    <Ads />
                    <Footer />
                </>
            )}
        </div>
    )
}