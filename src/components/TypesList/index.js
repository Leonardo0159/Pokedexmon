import styles from "./TypesList.module.css";
import { get } from "../../service/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Loading } from "../Loading";
import Image from "next/image";

export const TypesList = (props) => {
    const type = props.type;
    const [pokemonListInfo, setPokemonListInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadAll = async () => {
        if (type) {
            let list = type;

            for (let i = 0; i < list.pokemon.length; i++) {

                get(list.pokemon[i].pokemon.url).then((data) => {

                    get("https://pokeapi.co/api/v2/pokemon/" + data.name).then((data) => {
                        if (data.sprites) {
                            if (data.sprites.other['official-artwork'].front_default != null) {
                                let dataPokemon = {
                                    name: data.name,
                                    id: data.id,
                                    img: data.sprites.other['official-artwork'].front_default
                                }
    
                                setPokemonListInfo(old => [...old, dataPokemon]);
                            }
                        }
                    });
                });
                if (i == (list.pokemon.length-1)) {
                    setLoading(false);
                }
            }
        }
    }

    useEffect(() => {
        setPokemonListInfo([])
        loadAll();
    }, [type]);

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
                                <div onClick={() => props.setLoading(true)} className={styles.box}>
                                    <div className={styles.image}>
                                        <Image width={200} height={200} src={item.img} />
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