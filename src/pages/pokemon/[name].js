import { useRouter } from "next/router";
import Head from 'next/head'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PokemonPresentation } from "../../components/PokemonPresentation";
import { Loading } from "../../components/Loading";
import { useEffect, useState } from "react";
import { get } from '../../service/api';
import { PokemonNotFound } from "../../components/PokemonNotFound";
import { Ads } from "../../components/Ads";
import 'isomorphic-fetch';

const PokemonDetails = ({ poke, pokeSpecies }) => {
    const [pokemonInfo, setPokemonInfo] = useState();
    const [loading, setLoading] = useState(true);
    const [pokemonSpecies, setPokemonSpecies] = useState();
    const [notFound, setNotFound] = useState(false);
    let namePokemon = poke.name;
    let descriptionPokemon;

    const loadAll = async () => {

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

    useEffect(() => {
        loadAll();
    }, []);

    useEffect(() => {
        if (pokeSpecies) {
            const descriptionEn = "";
            for (let i = 0; i < pokeSpecies.flavor_text_entries.length; i++) {
                if (pokeSpecies.flavor_text_entries[i].language.name == "en") {
                    descriptionEn = pokeSpecies.flavor_text_entries[i].flavor_text;
                    break;
                }
            }
            
            descriptionPokemon = descriptionEn;
        }
    }, [descriptionPokemon]);

    return (
        <div>
            <Head>
                <title>Pokédexmon | {namePokemon}</title>
                <meta name="description" content={namePokemon+": "+descriptionPokemon+" See everything about your favorite pokemons in the best pokedex and be the best pokemon trainer in the world! Gotta catch em all!"} />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={"Pokédexmon | "+namePokemon} />
                <meta property="og:description" content={namePokemon+": "+descriptionPokemon+" See everything about your favorite pokemons in the best pokedex and be the best pokemon trainer in the world! Gotta catch em all!"} />
                <meta property="og:url" content="https://www.pokedexmon.com/" />
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
                    {notFound ? (
                        <PokemonNotFound />
                    ) : (
                        <div>
                            <Ads />
                            <PokemonPresentation pokemonInfo={pokemonInfo} pokeSpecies={pokemonSpecies} />
                            <Ads />
                        </div>
                    )}
                    <Footer />
                </div>
            )}

        </div>
    )
}

export async function getServerSideProps(context) {

    let poke = await get("https://pokeapi.co/api/v2/pokemon/" + context.query.name)
    let pokeSpecies = await get("https://pokeapi.co/api/v2/pokemon-species/" + context.query.name)

    return { props: { poke, pokeSpecies } }
}

export default PokemonDetails;