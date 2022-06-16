import styles from "./PokemonNotFound.module.css";

export const PokemonNotFound = () => {
    return (
        <div className={styles.pokemonNotFound}>
            <div className={styles.gifLoad}>
                <img src="/load.gif"/>
            </div>
            <div className={styles.textLoad}>
                <span>Pokemon not found</span>
            </div>
        </div>
    );
};