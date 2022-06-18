import Link from 'next/link'
import styles from './BannerLegendary.module.css'

export const BannerLegendary = () => {
    return (
        <div className={styles.bannerLegendary}>
            <div className={styles.container}>
                <div className={styles.content}>
                </div>
                <div className={styles.content}>
                    <h2>Legendary Pokemons</h2>
                    <p>Legendary Pokemon are some of the most powerful little monsters in the Pokémon universe, rare creatures with abilities far above others, as well as stats that make them some of the strongest Pokémon in games.</p>
                    <Link href='/legendary-pokemons'><span className={styles.buttonLearnMore}>See Legendary Pokemons</span></Link>
                </div>
            </div>
        </div>
    )
}