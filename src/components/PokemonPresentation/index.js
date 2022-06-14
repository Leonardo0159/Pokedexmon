import { useEffect, useState } from 'react';
import { get } from '../../service/api';
import styles from './PokemonPresentation.module.css'

export const PokemonPresentation = (props) => {
    const pokemon = props.pokemon;
    const [pokemonInfo, setPokemonInfo] = useState();

    const loadAll = async () => {
        if (pokemon) {
            let poke = await get("https://pokeapi.co/api/v2/pokemon/" + pokemon);
            setPokemonInfo(poke);
        }
    }

    useEffect(() => {
        loadAll();
    }, [pokemon]);

    const styleType1 = () => {
        if (pokemonInfo) {
            if (pokemonInfo.types[0].type.name == "grass") {
                return styles.grass
            } else if (pokemonInfo.types[0].type.name == "poison") {
                return styles.poison
            } else if (pokemonInfo.types[0].type.name == "fire") {
                return styles.fire
            } else if (pokemonInfo.types[0].type.name == "water") {
                return styles.water
            } else if (pokemonInfo.types[0].type.name == "flying") {
                return styles.flying
            } else if (pokemonInfo.types[0].type.name == "fighting") {
                return styles.fighting
            } else if (pokemonInfo.types[0].type.name == "electric") {
                return styles.electric
            } else if (pokemonInfo.types[0].type.name == "ground") {
                return styles.ground
            } else if (pokemonInfo.types[0].type.name == "rock") {
                return styles.rock
            } else if (pokemonInfo.types[0].type.name == "psychic") {
                return styles.psychic
            } else if (pokemonInfo.types[0].type.name == "ice") {
                return styles.ice
            } else if (pokemonInfo.types[0].type.name == "bug") {
                return styles.bug
            } else if (pokemonInfo.types[0].type.name == "ghost") {
                return styles.ghost
            } else if (pokemonInfo.types[0].type.name == "steel") {
                return styles.steel
            } else if (pokemonInfo.types[0].type.name == "dragon") {
                return styles.dragon
            } else if (pokemonInfo.types[0].type.name == "dark") {
                return styles.dark
            } else if (pokemonInfo.types[0].type.name == "fairy") {
                return styles.fairy
            } else if (pokemonInfo.types[0].type.name == "normal") {
                return styles.normal
            }
        }
    }

    const styleType2 = () => {
        if (pokemonInfo) {
            if (pokemonInfo.types[1].type.name == "grass") {
                return styles.grass
            } else if (pokemonInfo.types[1].type.name == "poison") {
                return styles.poison
            } else if (pokemonInfo.types[1].type.name == "fire") {
                return styles.fire
            } else if (pokemonInfo.types[1].type.name == "water") {
                return styles.water
            } else if (pokemonInfo.types[1].type.name == "flying") {
                return styles.flying
            } else if (pokemonInfo.types[1].type.name == "fighting") {
                return styles.fighting
            } else if (pokemonInfo.types[1].type.name == "electric") {
                return styles.electric
            } else if (pokemonInfo.types[1].type.name == "ground") {
                return styles.ground
            } else if (pokemonInfo.types[1].type.name == "rock") {
                return styles.rock
            } else if (pokemonInfo.types[1].type.name == "psychic") {
                return styles.psychic
            } else if (pokemonInfo.types[1].type.name == "ice") {
                return styles.ice
            } else if (pokemonInfo.types[1].type.name == "bug") {
                return styles.bug
            } else if (pokemonInfo.types[1].type.name == "ghost") {
                return styles.ghost
            } else if (pokemonInfo.types[1].type.name == "steel") {
                return styles.steel
            } else if (pokemonInfo.types[1].type.name == "dragon") {
                return styles.dragon
            } else if (pokemonInfo.types[1].type.name == "dark") {
                return styles.dark
            } else if (pokemonInfo.types[1].type.name == "fairy") {
                return styles.fairy
            } else if (pokemonInfo.types[1].type.name == "normal") {
                return styles.normal
            }
        }
    }

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
                                                    <span className={styleType1()}>{pokemonInfo.types[0].type.name}</span>
                                                </div>
                                            )
                                        }
                                        if (pokemonInfo.types.length == 2) {
                                            return (
                                                <div className={styles.pokemonTypes}>
                                                    <span className={styleType1()}>{pokemonInfo.types[0].type.name}</span>
                                                    <span className={styleType2()}>{pokemonInfo.types[1].type.name}</span>
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