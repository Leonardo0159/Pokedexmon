import { useEffect, useState } from 'react';
import { get } from '../../service/api';
import styles from './PokemonPresentation.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { TypeCalculator } from '../TypeCalculator';
import Image from 'next/image';

export const PokemonPresentation = (props) => {

    const pokemonInfo = props.pokemonInfo;
    const pokemonSpecies = props.pokeSpecies;

    const styleType = (type) => {
        if (pokemonInfo) {
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
        if (pokemonInfo) {
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
                                    if (pokemonInfo) {
                                        return (
                                            <Image width={3000} height={2500} src={pokemonInfo.sprites.other['official-artwork'].front_default} />
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
                                                    <span className={styleType(pokemonInfo.types[0].type.name)}>{upperCase(pokemonInfo.types[0].type.name)}</span>
                                                </div>
                                            )
                                        }
                                        if (pokemonInfo.types.length == 2) {

                                            return (
                                                <div className={styles.pokemonTypes}>
                                                    <span className={styleType(pokemonInfo.types[0].type.name)}>{upperCase(pokemonInfo.types[0].type.name)}</span>
                                                    <span className={styleType(pokemonInfo.types[1].type.name)}>{upperCase(pokemonInfo.types[1].type.name)}</span>
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
                                    if (pokemonInfo) {
                                        return (
                                            upperCase(pokemonInfo.name)
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
                                    if (pokemonSpecies) {
                                        if (pokemonSpecies.is_legendary) {
                                            return (
                                                <div className={styles.rarity}>
                                                    <h3>Rarity: </h3><span>Legendary</span>
                                                </div>
                                            )
                                        } else if (pokemonSpecies.is_mythical) {
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
                                    if (pokemonInfo) {
                                        return (
                                            <div className={styles.attributes}>
                                                <h3>Weight: </h3><span>{pokemonInfo.weight}</span>
                                                <h3>Height: </h3><span>{pokemonInfo.height}</span>
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
                                    if (pokemonInfo) {
                                        const hp = pokemonInfo.stats[0].base_stat;
                                        const attack = pokemonInfo.stats[1].base_stat;
                                        const defense = pokemonInfo.stats[2].base_stat;
                                        const sAttack = pokemonInfo.stats[3].base_stat;
                                        const sDefense = pokemonInfo.stats[4].base_stat;
                                        const speed = pokemonInfo.stats[5].base_stat;
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
                                if (pokemonSpecies) {
                                    const descriptionEn = "";
                                    for (let i = 0; i < pokemonSpecies.flavor_text_entries.length; i++) {
                                        if (pokemonSpecies.flavor_text_entries[i].language.name == "en") {
                                            descriptionEn = pokemonSpecies.flavor_text_entries[i].flavor_text;
                                            break;
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
                        if (pokemonInfo) {
                            if (pokemonInfo.types.length == 1) {
                                return (
                                    <div className={styles.boxPokeTypes}>
                                        <TypeCalculator type={pokemonInfo.types[0].type.name} />
                                    </div>
                                )
                            }
                            if (pokemonInfo.types.length == 2) {
                                return (
                                    <div className={styles.pokemonTypes}>
                                        <div className={styles.boxPokeTypes}>
                                            <TypeCalculator type={pokemonInfo.types[0].type.name} />
                                        </div>

                                        <div className={styles.boxPokeTypes}>
                                            <TypeCalculator type={pokemonInfo.types[1].type.name} />
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