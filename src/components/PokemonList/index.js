import styles from "./PokemonList.module.css";
import { get } from "../../service/api";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";
import Router from 'next/router'

let nextUrl = '';
let previousUrl = '';
let pagina = 0;
export const PokemonList = (props) => {
    const page = props.page;
    const [pokemonListInfo, setPokemonListInfo] = useState([]);

    const loadAll = async () => {
        const url = "";
        let list;

        if (page == "1") {
            console.log("page 1");
            url = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"
            list = await get(url);
        } else {
            console.log("page n1");
            const limit = 40
            const offset = (parseInt(page)-1) * 40;
            url = "https://pokeapi.co/api/v2/pokemon?offset="+offset+"&limit=40"
            console.log(url);
            list = await get(url);
        }
         

        console.log("Resposta: ",list);

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

    const urlPage = () => {
        const url = "";

        if (page == "1") {
            console.log("page 1");
            url = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"
        } else {
            console.log("page n1");
            const limit = 40
            const offset = parseInt(page) * 40;
            url = "https://pokeapi.co/api/v2/pokemon?pokemon?offset=80&limit=40"
        }
        console.log("api da page: ", url);
        return url

    }

    useEffect(() => {
        if (page) {
            setPokemonListInfo([])
            loadAll();
        }
    }, [page]);

    const nextPage = () => {
        if (page != "28") {
            const nextPg = 0;
            nextPg = 1 + parseInt(page);
            const rota = '/page/' + nextPg + "";
            Router.push(rota);
        }  
    }

    const previousPage = () => {
        if (page != "1") {
            const previousPg = 0;
            previousPg = parseInt(page) - 1;
            const rota = '/page/' + previousPg + "";
            Router.push(rota);
        }
    }

    function compareId(a, b) {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    }

    const upperCase = (str) => {
        const strUpperCase = str[0].toUpperCase() + str.substr(1);
        return strUpperCase;
    }

    return (
        <div className={styles.pokemonList}>
            <div className={styles.container}>
                <div className={styles.controllerPages}>
                    {(() => {
                        if (page == "1") {
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
                        if (page == "28") {
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
                <div className={styles.controllerPages}>
                    {(() => {
                        if (page == "1") {
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
                        if (page == "28") {
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