import styles from './MythicalInfo.module.css'

export const MythicalInfo = () => {
    return (
        <div className={styles.mythicalInfo}>
            <div className={styles.container}>
                <h1>Mythical Pokémon</h1>
                <p>
                    Mythical Pokémon are a group of Pokémon seen so rarely in the Pokémon world that some question their very existence.
                </p>
                <p>
                    In Japanese media, Mythical Pokémon and Legendary Pokémon have always been presented as distinct groups.
                    In non-Japanese media prior to Generation V, Mythical Pokémon and Legendary Pokémon were both considered
                    to be Legendary Pokémon (and the term Mythical Pokémon was unused, with some fans calling Mythical
                    Pokémon &quot;Event Legendaries&quot;, reflecting how they usually must be obtained at an event, but they are not a
                    subset of them); since Generation V, the two groups are presented as distinct groups in all official media.
                    In Pokémon Ranger: Guardian Signs, Mythical Pokémon are referred to as rare Pokémon.
                </p>
                <p>
                    Mythical Pokémon were originally known in common conversation as &quot;Event Only Pokémon&quot; for a reason.
                    These Pokémon are so rare that they are typically only available through going to an event distribution
                    and either receiving the Pokémon itself, or an item to go get the Pokémon within the wild. Due to the
                    fact that these are typically only from events and have limited distributions, these Pokémon are banned
                    from Battle Tree, Battle Frontier and similar facilities, as well as the Rating Battles in Battle Spot
                    &amp; the Video Game Championships . Several instances of Online Competitions have allowed for the use of
                    these Pokémon. They have typically have base stats that sit around 600, and some even have Form
                    Changes or Mega Evolutions causing stat increases.
                </p>
            </div>
        </div>
    )
}