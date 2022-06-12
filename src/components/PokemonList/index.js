import styles from "./PokemonList.module.css";
import { get } from "../../service/api";
import { useEffect, useState } from "react";

export const PokemonList = () => {
    const [pokemonListInfo, setPokemonListInfo] = useState([]);

    const loadAll = async () => {
        console.log("teste a: ", pokemonListInfo)
        if (pokemonListInfo.length == 0) {
            let list = await get('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0');

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
    }

    useEffect(() => {
        loadAll();
    });

    return (
        <div className={styles.pokemonList}>
            <div className={styles.container}>
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