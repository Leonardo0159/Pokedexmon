import Image from 'next/image';
import styles from './MovieList.module.css';

export const MovieList = () => {

    const movieList = [
        {
            urlImage: '/movieImages/01.webp',
            name: 'Pokémon: The First Movie'
        },
        {
            urlImage: '/movieImages/02.webp',
            name: 'Pokémon: The Movie 2000'
        },
        {
            urlImage: '/movieImages/03.webp',
            name: 'Pokémon 3: Spell of the Unown'
        },
        {
            urlImage: '/movieImages/04.webp',
            name: 'Pokémon 4Ever'
        },
        {
            urlImage: '/movieImages/05.webp',
            name: 'Pokémon Heroes'
        },
        {
            urlImage: '/movieImages/06.webp',
            name: 'Pokémon: Jirachi Wish Maker'
        },
        {
            urlImage: '/movieImages/07.webp',
            name: 'Pokémon: Destiny Deoxys'
        },
        {
            urlImage: '/movieImages/08.webp',
            name: 'Pokémon: Lucario and the Mystery of Mew'
        },
        {
            urlImage: '/movieImages/09.webp',
            name: 'Pokémon Ranger and the Temple of the Sea'
        },
        {
            urlImage: '/movieImages/10.webp',
            name: 'Pokémon: The Rise of Darkrai'
        },
        {
            urlImage: '/movieImages/11.webp',
            name: 'Pokémon: Giratina & the Sky Warrior'
        },
        {
            urlImage: '/movieImages/12.webp',
            name: 'Pokémon: Arceus and the Jewel of Life'
        },
        {
            urlImage: '/movieImages/13.webp',
            name: 'Pokémon: Zoroark: Master of Illusions'
        },
        {
            urlImage: '/movieImages/14.webp',
            name: 'Pokémon the Movie: Black Victini and Reshiram'
        },
        {
            urlImage: '/movieImages/15.webp',
            name: 'Pokémon the Movie: White Victini and Zekrom'
        },
        {
            urlImage: '/movieImages/16.webp',
            name: 'Pokémon the Movie: Kyurem vs. the Sword of Justice'
        },
        {
            urlImage: '/movieImages/17.webp',
            name: 'Pokémon the Movie: Genesect and the Legend Awakened'
        },
        {
            urlImage: '/movieImages/18.webp',
            name: 'Pokémon the Movie: Diancie and the Cocoon of Destruction'
        },
        {
            urlImage: '/movieImages/19.webp',
            name: 'Pokémon the Movie: Hoopa and the Clash of Ages'
        },
        {
            urlImage: '/movieImages/20.webp',
            name: 'Pokémon the Movie: Volcanion and the Mechanical Marvel'
        },
        {
            urlImage: '/movieImages/21.webp',
            name: 'Pokémon the Movie: I Choose You!'
        },
        {
            urlImage: '/movieImages/22.webp',
            name: 'Pokémon the Movie: The Power of Us'
        },
        {
            urlImage: '/movieImages/23.webp',
            name: 'Pokémon: Mewtwo Strikes Back Evolution'
        },
        {
            urlImage: '/movieImages/24.webp',
            name: 'Pokémon the Movie: Secrets of the Jungle'
        }
    ]

    return (
        <div className={styles.movieList}>
            <div className={styles.container}>
                <div>
                    <h1>Download All Pokemon Movies</h1>
                </div>
                <div className={styles.boxes}>
                    {movieList.map((item, key) => (
                        <div key={key} className={styles.box}>
                            <Image
                                src={item.urlImage}
                                width={200}
                                height={300} />
                            <div className={styles.movieName}>
                                <span>{item.name}</span>
                            </div>
                            <div className={styles.btn}>
                                <button onClick={() => {window.open('https://seulink.net/pokedexmon-filme1', '_blank')}}>Download</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}