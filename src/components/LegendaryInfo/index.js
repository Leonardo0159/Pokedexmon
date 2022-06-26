import Image from 'next/image'
import styles from './LegendaryInfo.module.css'

export const LegendaryInfo = () => {
    return (
        <div className={styles.legendaryInfo}>
            <div className={styles.container}>
                <h1>Legendary Pokemon</h1>
                <p>
                    Legendary Pokémon are extremely rare and often very powerful Pokémon that are often associated with
                    legends of creation and/or destruction within their endemic regions.
                </p>
                <p>
                    Due to their power, Legendary Pokémon are often the target of Villain Groups that seek to control
                    or change the world within both the Anime and the games; in the latter, thwarting such attempts
                    has been integrated into each game&apos;s plot since Generation III.
                </p>
                <p>
                    Throughout the years, there has been much talk of Legendary Pokémon. Starting with just the 5 Legendary
                    Pokémon in Generation 1, as of Generation VII there are 81 different Legendary Pokémon. Legendary
                    Pokémon are typically rare and hard to get, usually being restricted to one or two of each species
                    in each game they&apos;re available in. Each Legendary Pokémon has an aspect of lore behind it that you
                    can discover in the game. Before Generation IV, there were no Legendary Pokémon that could breed,
                    before adding Manaphy and Phione. Before Generation III they couldn&apos;t have gender, and before
                    Generation VII there were no Legendary Pokémon that could evolve. They also started to get alternate
                    forms in Generation III and Generation IV that allowed for even more variety and lore-building.
                </p>
            </div>
        </div>
    )
}