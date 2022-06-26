import Head from 'next/head'
import { useState } from 'react';
import { Ads } from '../../components/Ads';
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LegendaryList } from '../../components/LegendaryList';
import { Loading } from '../../components/Loading';
import { MythicalInfo } from '../../components/MythicalInfo';
import { get } from '../../service/api';

const Mythical = ({ listPoke }) => {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Head>
                <title>Pokédexmon | Mythical Pokemons</title>
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
                    <LegendaryList rarity="mythical" setLoading={setLoading} listPoke={listPoke} />
                    <Ads />
                    <MythicalInfo />
                    <Ads />
                    <Footer />
                </>
            )}
        </div>
    )
}

export async function getServerSideProps(context) {

    let listPoke = await get("https://pokeapi.co/api/v2/pokemon-species?limit=10000&offset=0")

    return { props: { listPoke } }
}

export default Mythical;