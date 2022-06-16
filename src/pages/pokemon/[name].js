import { useRouter } from "next/router";
import Head from 'next/head'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PokemonPresentation } from "../../components/PokemonPresentation";
import { Loading } from "../../components/Loading";
import { useEffect, useState } from "react";
import { get } from '../../service/api';
import { PokemonNotFound } from "../../components/PokemonNotFound";


export default function PokemonDetails() {
    const router = useRouter();
    const [pokemonInfo, setPokemonInfo] = useState();
    const [loading, setLoading] = useState(true);
    const [pokemonSpecies, setPokemonSpecies] = useState();
    const [notFound, setNotFound] = useState(false);

    const loadAll = async () => {
        if (router.query.name) {
            let poke = await get("https://pokeapi.co/api/v2/pokemon/" + router.query.name)
            let pokeSpecies = await get("https://pokeapi.co/api/v2/pokemon-species/" + router.query.name)

            if (poke != 404 && pokeSpecies != 404) {
                setNotFound(false);
                setPokemonInfo(poke);
                setPokemonSpecies(pokeSpecies);
                setLoading(false);
            } else if (poke != 404) {
                setNotFound(false);
                setPokemonInfo(poke);
                setLoading(false);
            } else {
                setNotFound(true);
                setLoading(false);
            }
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
            <body>
                {loading ? (
                    <Loading />
                ) : (
                    <div>
                        <Header />
                        {notFound ? (
                            <PokemonNotFound />
                        ) : (
                            <div>
                                <PokemonPresentation pokemonInfo={pokemonInfo} pokeSpecies={pokemonSpecies} />
                            </div>
                        )}
                        <Footer />
                    </div>
                )}
            </body>
        </div>
    )
}