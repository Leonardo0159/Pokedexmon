import { useEffect, useState } from 'react';
import { get } from '../../service/api';
import styles from './PokemonPresentation.module.css'

export const PokemonPresentation = (props) => {
    const pokemon = props.pokemon;
    const [pokemonInfo, setPokemonInfo] = useState();

    const loadAll = async () => {
        let poke = await get("https://pokeapi.co/api/v2/pokemon/" + pokemon);
        setPokemonInfo(poke);
    }

    useEffect(() => {
        loadAll();
    }, [pokemon]);

    return (
        <div className={styles.pokemonPresentation}>
            <div className={styles.container}>
                <div className={styles.presentation}>
                    <div className={styles.sideLeft}>
                        <div className={styles.boxImage}>
                            <div className={styles.presentationImage}>
                                {(() => {
                                    if (pokemonInfo) {
                                        return (
                                            <img src={pokemonInfo.sprites.other['official-artwork'].front_default} />
                                        )
                                    } else {
                                        return (
                                            ""
                                        )
                                    }
                                })()}
                            </div>
                            <div className={styles.boxTypes}>
                                {(() => {
                                    if (pokemonInfo) {
                                        if (pokemonInfo.types.length == 1) {
                                            return (
                                                <div className={styles.pokemonTypes}>
                                                    <span>{pokemonInfo.types[0].type.name}</span>
                                                </div>
                                            )
                                        }
                                        if (pokemonInfo.types.length == 2) {
                                            return (
                                                <div className={styles.pokemonTypes}>
                                                    <span className={styles.glass}>{pokemonInfo.types[0].type.name}</span>
                                                    <span className={styles.poison}>{pokemonInfo.types[1].type.name}</span>
                                                </div>
                                            )
                                        }
                                    } else {
                                        return (
                                            ""
                                        )
                                    }
                                })()}
                            </div>
                        </div>
                    </div>
                    <div className={styles.sideRight}>
                        <div className={styles.box}>
                            <div className={styles.pokemonTitle}>
                                <h3>{pokemon}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}