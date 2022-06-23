import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Ads } from "../../components/Ads";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { PokemonList } from "../../components/PokemonList";
import { get } from "../../service/api";

const Page = ({ listPokemon }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Head>
                <title>Pokédexmon | Pokedex {router.query.page}</title>
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
                    <PokemonList page={router.query.page} setLoading={setLoading} listPokemon={listPokemon}/>
                    <Ads />
                    <Footer />
                </>
            )}
        </div>
    )
}

export async function getServerSideProps(context) {
    let listPokemon

    if (context.query.page == "1") {
        console.log("page 1");
        listPokemon = await get("https://pokeapi.co/api/v2/pokemon?limit=40&offset=0");
    } else {
        console.log("page n1");
        const limit = 40
        const offset = (parseInt(context.query.page) - 1) * 40;
        listPokemon = await get("https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=40");
    }

    return { props: { listPokemon } }
}

export default Page;