import Link from 'next/link'
import styles from './BannerMythical.module.css'

export const BannerMythical = () => {
    return (
        <div className={styles.bannerMythical}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Mythical Pokemons</h2>
                    <p>Mythical Pokemon are so rare and almost never seen by humans that many question whether they even exist. In games they cannot usually be found, they can only be obtained through distribution events.</p>
                    <Link href='/mythical-pokemons'><span className={styles.buttonLearnMore}>See Mythical Pokemons</span></Link>
                </div>
                <div className={styles.content}>
                    
                </div>
            </div>
        </div>
    )
}