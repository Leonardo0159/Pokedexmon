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

    const loading = () => {
        if (type == "home") {
            props.setLoading(true);
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
                            <span onClick={loading} className={styleNormal()}>Normal</span>
                        </Link>
                        <Link href="/types-pokemon/fire">
                            <span onClick={loading} className={styleFire()}>Fire</span>
                        </Link>
                        <Link href="/types-pokemon/water">
                            <span onClick={loading} className={styleWater()}>Water</span>
                        </Link>
                        <Link href="/types-pokemon/grass">
                            <span onClick={loading} className={styleGrass()}>Grass</span>
                        </Link>
                        <Link href="/types-pokemon/flying">
                            <span onClick={loading} className={styleFlying()}>Flying</span>
                        </Link>
                        <Link href="/types-pokemon/fighting">
                            <span onClick={loading} className={styleFighting()}>Fighting</span>
                        </Link>
                        <Link href="/types-pokemon/poison">
                            <span onClick={loading} className={stylePoison()}>Poison</span>
                        </Link>
                        <Link href="/types-pokemon/electric">
                            <span onClick={loading} className={styleElectric()}>Electric</span>
                        </Link>
                        <Link href="/types-pokemon/ground">
                            <span onClick={loading} className={styleGround()}>Ground</span>
                        </Link>
                        <Link href="/types-pokemon/rock">
                            <span onClick={loading} className={styleRock()}>Rock</span>
                        </Link>
                        <Link href="/types-pokemon/psychic">
                            <span onClick={loading} className={stylePsychic()}>Psychic</span>
                        </Link>
                        <Link href="/types-pokemon/ice">
                            <span onClick={loading} className={styleIce()}>Ice</span>
                        </Link>
                        <Link href="/types-pokemon/bug">
                            <span onClick={loading} className={styleBug()}>Bug</span>
                        </Link>
                        <Link href="/types-pokemon/ghost">
                            <span onClick={loading} className={styleGhost()}>Ghost</span>
                        </Link>
                        <Link href="/types-pokemon/steel">
                            <span onClick={loading} className={styleSteel()}>Steel</span>
                        </Link>
                        <Link href="/types-pokemon/dragon">
                            <span onClick={loading} className={styleDragon()}>Dragon</span>
                        </Link>
                        <Link href="/types-pokemon/dark">
                            <span onClick={loading} className={styleDark()}>Dark</span>
                        </Link>
                        <Link href="/types-pokemon/fairy">
                            <span onClick={loading} className={styleFairy()}>Fairy</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}