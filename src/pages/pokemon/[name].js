import { useRouter } from "next/router";
import Head from 'next/head'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PokemonPresentation } from "../../components/PokemonPresentation";
import { Loading } from "../../components/Loading";
import { useEffect, useState } from "react";
import { get } from '../../service/api';
import { TypeCalculator } from "../../components/TypeCalculator";

export default function PokemonDetails() {
    const router = useRouter();
    const [pokemonInfo, setPokemonInfo] = useState();
    const [loading, setLoading] = useState(true);
    const [pokemonSpecies, setPokemonSpecies] = useState();

    const loadAll = async () => {
        if (router.query.name) {
            let poke = await get("https://pokeapi.co/api/v2/pokemon/" + router.query.name);
            let pokeSpecies = await get("https://pokeapi.co/api/v2/pokemon-species/" + router.query.name);
            setPokemonInfo(poke);
            setPokemonSpecies(pokeSpecies);
            setLoading(false);
        }
    }

    useEffect(() => {
        loadAll();
    }, [router.query.name]);

    return (
        <div>
            <Head>
                <title>Pokédexmon | {router.query.name}</title>
                <meta name="description" content="See everything about your favorite pokémons in the best pokédex and be the best pokémon trainer in the world!" />
                <link rel="icon" href="/favicon.ico" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" data-ad-client="ca-pub-9645579603385719"></script>
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

            {loading ? (
                <Loading />
            ) : (
                <div>
                    <Header />
                    <PokemonPresentation pokemonInfo={pokemonInfo} pokeSpecies={pokemonSpecies} />
                    <Footer />
                </div>
            )}
        </div>
    )
}