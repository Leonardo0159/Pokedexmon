import Head from "next/head";
import { useRouter } from "next/router";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PokemonList } from "../../components/PokemonList";

export default function Page() {
    const router = useRouter();

    console.log(router.query.page)

    return (
        <div>
            <Head>
                <title>Pokédexmon | Page {router.query.page}</title>
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

            <Header />
            <PokemonList page={router.query.page} />
            <Footer />
        </div>
    )
}