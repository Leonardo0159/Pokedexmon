import { useEffect, useState } from 'react';
import { get } from '../../service/api';
import styles from './TypeCalculator.module.css'

export const TypeCalculator = (props) => {
    const type = props.type;
    const [doubleDamageFrom, setDoubleDamageFrom] = useState([]);
    const [doubleDamageTo, setDoubleDamageTo] = useState([]);
    const [halfDamageFrom, setHalfDamageFrom] = useState([]);
    const [halfDamageTo, setHalfDamageTo] = useState([]);
    const [noDamageFrom, setNoDamageFrom] = useState([]);
    const [noDamageTo, setNoDamageTo] = useState([]);


    const loadAll = async () => {
        if (type) {
            let typeUrl = await get("https://pokeapi.co/api/v2/type/" + type);
            setDoubleDamageFrom(typeUrl.damage_relations.double_damage_from);
            setDoubleDamageTo(typeUrl.damage_relations.double_damage_to);
            setHalfDamageFrom(typeUrl.damage_relations.half_damage_from);
            setHalfDamageTo(typeUrl.damage_relations.half_damage_to);
            setNoDamageFrom(typeUrl.damage_relations.no_damage_from);
            setNoDamageTo(typeUrl.damage_relations.no_damage_to);
        }
    }

    useEffect(() => {
        loadAll();
    }, [type])

    const styleType = (type) => {
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

    const upperCase = (str) => {
        const strUpperCase = str[0].toUpperCase() + str.substr(1);
        return strUpperCase;
    }

    return (
        <div className={styles.typeCalculator}>
            <div className={styles.pokemonType}>
                <h3>Pokemon type: </h3> <span className={styleType(type)}>{upperCase(type)}</span>
            </div>
            {(() => {
                if (doubleDamageFrom.length != 0) {
                    return (
                        <div className={styles.pokemonType}>
                            <h3>Double damage from: </h3>
                            <div className={styles.types}>
                                {doubleDamageFrom.map((item, key) => (
                                    <span key={key} className={styleType(item.name)}>{upperCase(item.name)}</span>
                                ))}
                            </div>
                        </div>
                    )
                } else {
                    return (
                        ""
                    )
                }
            })()}
            {(() => {
                if (doubleDamageTo.length != 0) {
                    return (
                        <div className={styles.pokemonType}>
                            <h3>Double damage to: </h3>
                            <div className={styles.types}>
                                {doubleDamageTo.map((item, key) => (
                                    <span key={key} className={styleType(item.name)}>{upperCase(item.name)}</span>
                                ))}
                            </div>
                        </div>
                    )
                } else {
                    return (
                        ""
                    )
                }
            })()}
            {(() => {
                if (halfDamageFrom.length != 0) {
                    return (
                        <div className={styles.pokemonType}>
                            <h3>Half damage from: </h3>
                            <div className={styles.types}>
                                {halfDamageFrom.map((item, key) => (
                                    <span key={key} className={styleType(item.name)}>{upperCase(item.name)}</span>
                                ))}
                            </div>
                        </div>
                    )
                } else {
                    return (
                        ""
                    )
                }
            })()}
            {(() => {
                if (halfDamageTo.length != 0) {
                    return (
                        <div className={styles.pokemonType}>
                            <h3>Half damage to: </h3>
                            <div className={styles.types}>
                                {halfDamageTo.map((item, key) => (
                                    <span key={key} className={styleType(item.name)}>{upperCase(item.name)}</span>
                                ))}
                            </div>
                        </div>
                    )
                } else {
                    return (
                        ""
                    )
                }
            })()}
            {(() => {
                if (noDamageFrom.length != 0) {
                    return (
                        <div className={styles.pokemonType}>
                            <h3>No damage from: </h3>
                            <div className={styles.types}>
                                {noDamageFrom.map((item, key) => (
                                    <span key={key} className={styleType(item.name)}>{upperCase(item.name)}</span>
                                ))}
                            </div>
                        </div>
                    )
                } else {
                    return (
                        ""
                    )
                }
            })()}
            {(() => {
                if (noDamageTo.length != 0) {
                    return (
                        <div className={styles.pokemonType}>
                            <h3>No damage to: </h3>
                            <div className={styles.types}>
                                {noDamageTo.map((item, key) => (
                                    <span key={key} className={styleType(item.name)}>{upperCase(item.name)}</span>
                                ))}
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
    )
}