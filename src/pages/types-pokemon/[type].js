import Head from 'next/head'
import { useRouter } from "next/router";
import { useState } from 'react';
import { Ads } from '../../components/Ads';
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loading } from '../../components/Loading';
import { TypesController } from '../../components/TypesController';
import { TypesList } from "../../components/TypesList";
import { get } from '../../service/api';

const TypesPokemon = ({ typePokemon }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const upperCase = (str) => {
        if (typePokemon) {
            const strUpperCase = str[0].toUpperCase() + str.substr(1);
            return strUpperCase;
        }
    }

    return (
        <div>
            <Head>
                <title>{upperCase(typePokemon.name)} | Types Pokemon | Pokédexmon</title>
                <meta name="description" content="See everything about your favorite pokemons in the best pokedex and be the best pokemon trainer in the world! Gotta catch em all!" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Pokédexmon | Types Pokemon" />
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
                    <TypesController type={router.query.type}/>
                    <TypesList type={typePokemon} setLoading={setLoading}/>
                    <Ads />
                    <Footer />
                </>
            )}
        </div>
    )
}

export async function getServerSideProps(context) {

    let typePokemon = await get("https://pokeapi.co/api/v2/type/" + context.query.type)

    return { props: { typePokemon } }
}

export default TypesPokemon;