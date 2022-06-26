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
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    let namePokemon = poke.name;


    const upperCase = (str) => {
        if (poke) {
            const strUpperCase = str[0].toUpperCase() + str.substr(1);
            return strUpperCase;
        }
    }

    return (
        <div>
            <Head>
                <title>{upperCase(namePokemon)} | Pokédexmon</title>
                <meta name="description" content={"Know everything about "+namePokemon+" and its stats, strengths and weakness with pokedexmon! Gotta catch em all!"} />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={"Pokédexmon | "+namePokemon} />
                <meta property="og:description" content={"Know everything about "+namePokemon+" and its stats, strengths and weakness with pokedexmon! Gotta catch em all!"} />
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
                            <PokemonPresentation pokemonInfo={poke} pokemonSpecies={pokeSpecies} setLoading={setLoading} setNotFound={setNotFound}/>
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