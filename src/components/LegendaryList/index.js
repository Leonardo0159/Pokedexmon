import styles from "./LegendaryList.module.css";
import { get } from "../../service/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Loading } from "../Loading";

export const LegendaryList = () => {
    const [pokemonListInfo, setPokemonListInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadAll = async () => {
        const url = "";
        let list;

        url = "https://pokeapi.co/api/v2/pokemon-species?limit=10000&offset=0"
        list = await get(url);

        for (let i = 0; i < list.results.length; i++) {

            get(list.results[i].url).then((data) => {
                if (data.is_legendary) {
                    get("https://pokeapi.co/api/v2/pokemon/" + data.name).then((data) => {
                        if (data.sprites) {
                            let dataPokemon = {
                                name: data.name,
                                id: data.id,
                                img: data.sprites.other['official-artwork'].front_default
                            }

                            setPokemonListInfo(old => [...old, dataPokemon]);
                        }
                    });
                }
                setLoading(false);
            });
        }
    }

    useEffect(() => {
        setPokemonListInfo([])
        loadAll();
    }, []);

    function compareId(a, b) {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    }

    const upperCase = (str) => {
        if (str) {
            const strUpperCase = str[0].toUpperCase() + str.substr(1);
            return strUpperCase;
        }
    }

    return (
        <div className={styles.pokemonList}>
            {loading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <div className={styles.boxes}>
                        {pokemonListInfo.sort(compareId) && pokemonListInfo.map((item, key) => (
                            <Link key={key} href={'/pokemon/' + item.name}>
                                <div className={styles.box}>
                                    <div className={styles.image}>
                                        <img src={item.img} />
                                    </div>
                                    <div className={styles.number}>
                                        <span>#{item.id}</span>
                                    </div>
                                    <div className={styles.name}>
                                        <span>{upperCase(item.name)}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}