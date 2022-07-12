import { useEffect, useState } from 'react';
import { get } from '../../service/api';
import styles from './PokemonPresentation.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { TypeCalculator } from '../TypeCalculator';
import Image from 'next/image';

export const PokemonPresentation = (props) => {
    console.log("pokemonInfo: ", props.pokemonInfo)
    console.log("pokemonSpecies: ", props.pokemonSpecies)

    const loadAll = async () => {

        if (props.pokemonInfo != 404 && props.pokeSpecies != 404) {
            props.setNotFound(false);
            props.setLoading(false);
        } else if (props.pokemonInfo != 404) {
            props.setNotFound(false);
            props.setLoading(false);
        } else {
            props.setNotFound(true);
            props.setLoading(false);
        }
    }

    useEffect(() => {
        loadAll();
    }, []);

    const styleType = (type) => {
        if (props.pokemonInfo) {
            if (type == "grass") {
                return styles.grass
            } else if (type == "poison") {
                return styles.poison
            } else if (type == "fire") {
                return styles.fire
            } else if (type == "water") {
                return styles.water
            } else if (type == "flying") {
                return styles.flying
            } else if (type == "fighting") {
                return styles.fighting
            } else if (type == "electric") {
                return styles.electric
            } else if (type == "ground") {
                return styles.ground
            } else if (type == "rock") {
                return styles.rock
            } else if (type == "psychic") {
                return styles.psychic
            } else if (type == "ice") {
                return styles.ice
            } else if (type == "bug") {
                return styles.bug
            } else if (type == "ghost") {
                return styles.ghost
            } else if (type == "steel") {
                return styles.steel
            } else if (type == "dragon") {
                return styles.dragon
            } else if (type == "dark") {
                return styles.dark
            } else if (type == "fairy") {
                return styles.fairy
            } else if (type == "normal") {
                return styles.normal
            }
        }
    }

    const upperCase = (str) => {
        if (props.pokemonInfo && (props.pokemonInfo != 404)) {
            const strUpperCase = str[0].toUpperCase() + str.substr(1);
            return strUpperCase;
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
                                    if (props.pokemonInfo && (props.pokemonInfo != 404)) {
                                        return (
                                            <Image width={3000} height={2500} src={props.pokemonInfo.sprites.other['official-artwork'].front_default} />
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
                                    if (props.pokemonInfo && (props.pokemonInfo != 404)) {
                                        if (props.pokemonInfo.types.length == 1) {
                                            return (
                                                <div className={styles.pokemonTypes}>
                                                    <span className={styleType(props.pokemonInfo.types[0].type.name)}>{upperCase(props.pokemonInfo.types[0].type.name)}</span>
                                                </div>
                                            )
                                        }
                                        if (props.pokemonInfo.types.length == 2) {

                                            return (
                                                <div className={styles.pokemonTypes}>
                                                    <span className={styleType(props.pokemonInfo.types[0].type.name)}>{upperCase(props.pokemonInfo.types[0].type.name)}</span>
                                                    <span className={styleType(props.pokemonInfo.types[1].type.name)}>{upperCase(props.pokemonInfo.types[1].type.name)}</span>
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
                                <h1>{(() => {
                                    if (props.pokemonInfo) {
                                        return (
                                            upperCase(props.pokemonInfo.name)
                                        )
                                    } else {
                                        return (
                                            ""
                                        )
                                    }
                                })()}
                                </h1>
                            </div>
                            <div className={styles.pokemonTitle}>
                                {(() => {
                                    if (props.pokemonSpecies) {
                                        if (props.pokemonSpecies.is_legendary) {
                                            return (
                                                <div className={styles.rarity}>
                                                    <h3>Rarity: </h3><span>Legendary</span>
                                                </div>
                                            )
                                        } else if (props.pokemonSpecies.is_mythical) {
                                            return (
                                                <div className={styles.rarity}>
                                                    <h3>Rarity: </h3><span>Mythical</span>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className={styles.rarity}>
                                                    <h3>Rarity: </h3><span>Common</span>
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
                            <div className={styles.pokemonAttributes}>
                                {(() => {
                                    if (props.pokemonInfo) {
                                        return (
                                            <div className={styles.attributes}>
                                                <h3>Weight: </h3><span>{props.pokemonInfo.weight}</span>
                                                <h3>Height: </h3><span>{props.pokemonInfo.height}</span>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            ""
                                        )
                                    }
                                })()}
                            </div>
                            <div className={styles.pokemonStats}>
                                <h3>Stats:</h3>
                                {(() => {
                                    if (props.pokemonInfo && (props.pokemonInfo != 404)) {
                                        const hp = props.pokemonInfo.stats[0].base_stat;
                                        const attack = props.pokemonInfo.stats[1].base_stat;
                                        const defense = props.pokemonInfo.stats[2].base_stat;
                                        const sAttack = props.pokemonInfo.stats[3].base_stat;
                                        const sDefense = props.pokemonInfo.stats[4].base_stat;
                                        const speed = props.pokemonInfo.stats[5].base_stat;
                                        return (
                                            <div>
                                                <div>
                                                    <span>HP: </span><ProgressBar now={hp} label={`${hp}`} />
                                                </div>
                                                <div>
                                                    <span>Attack: </span><ProgressBar now={attack} label={`${attack}`} />
                                                </div>
                                                <div>
                                                    <span>Defense: </span><ProgressBar now={defense} label={`${defense}`} />
                                                </div>
                                                <div>
                                                    <span>Special Attack: </span><ProgressBar now={sAttack} label={`${sAttack}`} />
                                                </div>
                                                <div>
                                                    <span>Special Defense: </span><ProgressBar now={sDefense} label={`${sDefense}`} />
                                                </div>
                                                <div>
                                                    <span>Speed: </span><ProgressBar now={speed} label={`${speed}`} />
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            ""
                                        )
                                    }
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.presentation}>
                    <div className={styles.sideLeft}>
                        <div className={styles.boxDescription}>
                            <h3>Description</h3>
                            {(() => {
                                if (props.pokemonSpecies) {
                                    let descriptionEn = "";
                                    if (props.pokemonSpecies != 404) {
                                        for (let i = 0; i < props.pokemonSpecies.flavor_text_entries.length; i++) {
                                            if (props.pokemonSpecies.flavor_text_entries[i].language.name == "en") {
                                                descriptionEn = props.pokemonSpecies.flavor_text_entries[i].flavor_text;
                                                break;
                                            }
                                        }
                                    }
                                    return (
                                        <span>{descriptionEn}</span>
                                    )
                                } else {
                                    return (
                                        ""
                                    )
                                }
                            })()}
                        </div>
                    </div>
                </div>
                <div className={styles.presentation}>
                    {(() => {
                        if (props.pokemonInfo && (props.pokemonInfo != 404)) {
                            if (props.pokemonInfo.types.length == 1) {
                                return (
                                    <div className={styles.boxPokeTypes}>
                                        <TypeCalculator type={props.pokemonInfo.types[0].type.name} />
                                    </div>
                                )
                            }
                            if (props.pokemonInfo.types.length == 2) {
                                return (
                                    <div className={styles.pokemonTypes}>
                                        <div className={styles.boxPokeTypes}>
                                            <TypeCalculator type={props.pokemonInfo.types[0].type.name} />
                                        </div>

                                        <div className={styles.boxPokeTypes}>
                                            <TypeCalculator type={props.pokemonInfo.types[1].type.name} />
                                        </div>
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
    )
}