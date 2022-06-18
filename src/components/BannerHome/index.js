import Link from 'next/link'
import styles from './BannerHome.module.css'

export const BannerHome = () => {
    return (
        <div className={styles.bannerHome}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Pokédexmon - Gotta catch em all!</h1>
                    <p>To become a real pokemon trainer, you need to know everything about your pokemons in our pokedex!</p>
                    <Link href='/pokedex/1'><span className={styles.buttonLearnMore}>POKÉDEX</span></Link>
                </div>
            </div>
        </div>
    )
}