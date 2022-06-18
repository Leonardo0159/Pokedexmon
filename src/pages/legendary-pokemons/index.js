import Head from 'next/head'
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LegendaryList } from '../../components/LegendaryList';

export default function Legendary() {
    return (
        <div>
            <Head>
                <title>Pokédexmon | Legendary Pokemons</title>
                <meta name="description" content="See everything about your favorite pokémons in the best pokédex and be the best pokémon trainer in the world!" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Pokédexmon" />
                <meta property="og:description" content="See everything about your favorite pokémons in the best pokédex and be the best pokémon trainer in the world!" />
                <meta property="og:url" content="https://www.pokedexmon.com/" />
                <meta property="og:site_name" content="Pokédexmon" />
                <meta property="og:image" content="/pokeball.png" />
                <meta property="og:image:width" content="183" />
                <meta property="og:image:height" content="224" />
            </Head>

            <Header />
            <LegendaryList />
            <Footer />
        </div>
    )
}