import styles from "./PokemonList.module.css";
import { get } from "../../service/api";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";

let nextUrl = '';
let previousUrl = '';
let pagina = 0;
export const PokemonList = () => {
    const [pokemonListInfo, setPokemonListInfo] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0');

    const loadAll = async () => {
        let list = await get(url);

        if (list.next != null) {
            nextUrl = list.next;
        } else {
            nextUrl = "";
        }

        if (list.previous != null) {
            previousUrl = list.previous;
        } else {
            previousUrl = ""
        }

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
        if (nextUrl != "") {
            pagina = pagina + 1;
            setPokemonListInfo([])
            setUrl(nextUrl);
        }
    }

    const previousPage = () => {
        if (previousUrl != "") {
            pagina = pagina - 1;
            setPokemonListInfo([])
            setUrl(previousUrl);
        }
    }

    const clickPokemon = (item) => {

    }

    return (
        <div className={styles.pokemonList}>
            <div className={styles.container}>
                <div className={styles.controllerPages}>
                    {(() => {
                        if (previousUrl == "") {
                            return (
                                <a onClick={previousPage}><BsFillArrowLeftCircleFill size={35} color="#CCCCCC" /></a>
                            )
                        } else {
                            return (
                                <a onClick={previousPage}><BsFillArrowLeftCircleFill size={35} color="#ffc200" /></a>
                            )
                        }
                    })()}
                    {(() => {
                        if (nextUrl == "") {
                            return (
                                <a onClick={nextPage}><BsFillArrowRightCircleFill size={35} color="#CCCCCC" /></a>
                            )
                        } else {
                            return (
                                <a onClick={nextPage}><BsFillArrowRightCircleFill size={35} color="#ffc200" /></a>
                            )
                        }
                    })()}
                </div>
                <div className={styles.boxes}>
                    {pokemonListInfo.map((item, key) => (
                        <Link href={'/pokemon/' + item.name}>
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
                        </Link>
                    ))}
                </div>
                <div className={styles.controllerPages}>
                    {(() => {
                        if (previousUrl == "") {
                            return (
                                <a onClick={previousPage}><BsFillArrowLeftCircleFill size={35} color="#CCCCCC" /></a>
                            )
                        } else {
                            return (
                                <a onClick={previousPage}><BsFillArrowLeftCircleFill size={35} color="#ffc200" /></a>
                            )
                        }
                    })()}
                    {(() => {
                        if (nextUrl == "") {
                            return (
                                <a onClick={nextPage}><BsFillArrowRightCircleFill size={35} color="#CCCCCC" /></a>
                            )
                        } else {
                            return (
                                <a onClick={nextPage}><BsFillArrowRightCircleFill size={35} color="#ffc200" /></a>
                            )
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}