import Link from "next/link";
import styles from "./TypesController.module.css";

export const TypesController = (props) => {
    const type = props.type;

    const styleNormal = () => {
        if (type) {
            if (type == "normal") {
                return styles.normal
            } else if (type == "home") {
                return styles.normal
            } else {
                return styles.noType
            }
        }
    }
    const styleFire = () => {
        if (type) {
            if (type == "fire") {
                return styles.fire
            }else if (type == "home") {
                return styles.fire
            } else {
                return styles.noType
            }
        }
    }
    const styleWater = () => {
        if (type) {
            if (type == "water") {
                return styles.water
            }else if (type == "home") {
                return styles.water
            } else {
                return styles.noType
            }
        }
    }
    
    const styleGrass = () => {
        if (type) {
            if (type == "grass") {
                return styles.grass
            }else if (type == "home") {
                return styles.grass
            } else {
                return styles.noType
            }
        }
    }
    const styleFlying = () => {
        if (type) {
            if (type == "flying") {
                return styles.flying
            }else if (type == "home") {
                return styles.flying
            } else {
                return styles.noType
            }
        }
    }
    const styleFighting = () => {
        if (type) {
            if (type == "fighting") {
                return styles.fighting
            }else if (type == "home") {
                return styles.fighting
            } else {
                return styles.noType
            }
        }
    }
    const stylePoison = () => {
        if (type) {
            if (type == "poison") {
                return styles.poison
            }else if (type == "home") {
                return styles.poison
            } else {
                return styles.noType
            }
        }
    }
    const styleElectric = () => {
        if (type) {
            if (type == "electric") {
                return styles.electric
            }else if (type == "home") {
                return styles.electric
            } else {
                return styles.noType
            }
        }
    }
    const styleGround = () => {
        if (type) {
            if (type == "ground") {
                return styles.ground
            }else if (type == "home") {
                return styles.ground
            } else {
                return styles.noType
            }
        }
    }
    const styleRock = () => {
        if (type) {
            if (type == "rock") {
                return styles.rock
            }else if (type == "home") {
                return styles.rock
            } else {
                return styles.noType
            }
        }
    }
    const stylePsychic = () => {
        if (type) {
            if (type == "psychic") {
                return styles.psychic
            }else if (type == "home") {
                return styles.psychic
            } else {
                return styles.noType
            }
        }
    }
    const styleIce = () => {
        if (type) {
            if (type == "ice") {
                return styles.ice
            }else if (type == "home") {
                return styles.ice
            } else {
                return styles.noType
            }
        }
    }
    const styleBug = () => {
        if (type) {
            if (type == "bug") {
                return styles.bug
            }else if (type == "home") {
                return styles.bug
            } else {
                return styles.noType
            }
        }
    }
    const styleGhost = () => {
        if (type) {
            if (type == "ghost") {
                return styles.ghost
            }else if (type == "home") {
                return styles.ghost
            } else {
                return styles.noType
            }
        }
    }
    const styleSteel = () => {
        if (type) {
            if (type == "steel") {
                return styles.steel
            }else if (type == "home") {
                return styles.steel
            } else {
                return styles.noType
            }
        }
    }
    const styleDragon = () => {
        if (type) {
            if (type == "dragon") {
                return styles.dragon
            }else if (type == "home") {
                return styles.dragon
            } else {
                return styles.noType
            }
        }
    }
    const styleDark = () => {
        if (type) {
            if (type == "dark") {
                return styles.dark
            }else if (type == "home") {
                return styles.dark
            } else {
                return styles.noType
            }
        }
    }
    const styleFairy = () => {
        if (type) {
            if (type == "fairy") {
                return styles.fairy
            }else if (type == "home") {
                return styles.fairy
            } else {
                return styles.noType
            }
        }
    }

    return (
        <div className={styles.typesController}>
            <div className={styles.banner}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h3>Types Pokemon</h3>
                        <p>
                            Types are properties applied to Pokémon and their moves, which affect the power of moves in battles. As of Generation VI, there are 18 types, as listed to the down. Most of these were introduced during Generation I, but the Dark and Steel types were introduced in Generation II, and the Fairy type was introduced in Generation VI.
                        </p>
                        <p>Select pokemon type:</p>
                    </div>
                    <div className={styles.buttons}>
                        <Link href="/types-pokemon/normal">
                            <span className={styleNormal()}>Normal</span>
                        </Link>
                        <Link href="/types-pokemon/fire">
                            <span className={styleFire()}>Fire</span>
                        </Link>
                        <Link href="/types-pokemon/water">
                            <span className={styleWater()}>Water</span>
                        </Link>
                        <Link href="/types-pokemon/grass">
                            <span className={styleGrass()}>Grass</span>
                        </Link>
                        <Link href="/types-pokemon/flying">
                            <span className={styleFlying()}>Flying</span>
                        </Link>
                        <Link href="/types-pokemon/fighting">
                            <span className={styleFighting()}>Fighting</span>
                        </Link>
                        <Link href="/types-pokemon/poison">
                            <span className={stylePoison()}>Poison</span>
                        </Link>
                        <Link href="/types-pokemon/electric">
                            <span className={styleElectric()}>Electric</span>
                        </Link>
                        <Link href="/types-pokemon/ground">
                            <span className={styleGround()}>Ground</span>
                        </Link>
                        <Link href="/types-pokemon/rock">
                            <span className={styleRock()}>Rock</span>
                        </Link>
                        <Link href="/types-pokemon/psychic">
                            <span className={stylePsychic()}>Psychic</span>
                        </Link>
                        <Link href="/types-pokemon/ice">
                            <span className={styleIce()}>Ice</span>
                        </Link>
                        <Link href="/types-pokemon/bug">
                            <span className={styleBug()}>Bug</span>
                        </Link>
                        <Link href="/types-pokemon/ghost">
                            <span className={styleGhost()}>Ghost</span>
                        </Link>
                        <Link href="/types-pokemon/steel">
                            <span className={styleSteel()}>Steel</span>
                        </Link>
                        <Link href="/types-pokemon/dragon">
                            <span className={styleDragon()}>Dragon</span>
                        </Link>
                        <Link href="/types-pokemon/dark">
                            <span className={styleDark()}>Dark</span>
                        </Link>
                        <Link href="/types-pokemon/fairy">
                            <span className={styleFairy()}>Fairy</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}