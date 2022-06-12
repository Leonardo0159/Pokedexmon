import styles from "./PokemonList.module.css";
import { get } from "../../service/api";
import { useEffect, useState } from "react";

let nextUrl;
export const PokemonList = () => {
    const [pokemonListInfo, setPokemonListInfo] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0');


    const loadAll = async () => {

        let list = await get(url);
        console.log(list.next)
        nextUrl = list.next;
        for (let i = 0; i < list.results.length; i++) {

            get(list.results[i].url).then((data) => {
                let dataPokemon = {
                    name: data.name,
                    id: data.id,
                    img: data.sprites.other['official-artwork'].front_default
                }

                setPokemonListInfo(old => [...old, dataPokemon]);
            });
        }

    }

    useEffect(() => {
        loadAll();
    }, [url]);

    const nextPage = () => {
        console.log(url)
        console.log(nextUrl)
        setPokemonListInfo([])
        setUrl(nextUrl);
    }

    return (
        <div className={styles.pokemonList}>
            <div className={styles.container}>
                <button onClick={nextPage}>Proximo</button>
                <div className={styles.boxes}>
                    {pokemonListInfo.map((item, key) => (
                        <div key={key} className={styles.box}>
                            <div className={styles.image}>
                                <img src={item.img} />
                            </div>
                            <div className={styles.number}>
                                <span>#{item.id}</span>
                            </div>
                            <div className={styles.name}>
                                <span>{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}