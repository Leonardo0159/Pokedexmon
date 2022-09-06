import Head from 'next/head'
import { Ads } from '../../components/Ads';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MovieList } from '../../components/MovieList';

const Poketv = () => {
    return (
        <div>
            <Head>
                <title>PokéTV | Pokédexmon</title>
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

            <Header />
            <Ads />
            <MovieList />
            <Ads />
            <Footer />
        </div>
    )
}

export default Poketv;