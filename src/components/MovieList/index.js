import Image from 'next/image';
import Link from 'next/link';
import styles from './MovieList.module.css';

export const MovieList = () => {

    const movieList = [
        {
            urlImage: '/movieImages/01.webp',
            name: 'Pokémon: The First Movie',
            url: '/movie/1'
        },
        {
            urlImage: '/movieImages/02.webp',
            name: 'Pokémon: The Movie 2000',
            url: '/movie/2'
        },
        {
            urlImage: '/movieImages/03.webp',
            name: 'Pokémon 3: Spell of the Unown',
            url: '/movie/3'
        },
        {
            urlImage: '/movieImages/04.webp',
            name: 'Pokémon 4Ever',
            url: '/movie/4'
        },
        {
            urlImage: '/movieImages/05.webp',
            name: 'Pokémon Heroes',
            url: '/movie/5'
        },
        {
            urlImage: '/movieImages/06.webp',
            name: 'Pokémon: Jirachi Wish Maker',
            url: '/movie/6'
        },
        {
            urlImage: '/movieImages/07.webp',
            name: 'Pokémon: Destiny Deoxys',
            url: '/movie/7'
        },
        {
            urlImage: '/movieImages/08.webp',
            name: 'Pokémon: Lucario and the Mystery of Mew',
            url: '/movie/8'
        },
        {
            urlImage: '/movieImages/09.webp',
            name: 'Pokémon Ranger and the Temple of the Sea',
            url: '/movie/9'
        },
        {
            urlImage: '/movieImages/10.webp',
            name: 'Pokémon: The Rise of Darkrai',
            url: '/movie/10'
        },
        {
            urlImage: '/movieImages/11.webp',
            name: 'Pokémon: Giratina & the Sky Warrior',
            url: '/movie/11'
        },
        {
            urlImage: '/movieImages/12.webp',
            name: 'Pokémon: Arceus and the Jewel of Life',
            url: '/movie/12'
        },
        {
            urlImage: '/movieImages/13.webp',
            name: 'Pokémon: Zoroark: Master of Illusions',
            url: '/movie/13'
        },
        {
            urlImage: '/movieImages/14.webp',
            name: 'Pokémon the Movie: Black Victini and Reshiram',
            url: '/movie/14'
        },
        {
            urlImage: '/movieImages/15.webp',
            name: 'Pokémon the Movie: White Victini and Zekrom',
            url: '/movie/15'
        },
        {
            urlImage: '/movieImages/16.webp',
            name: 'Pokémon the Movie: Kyurem vs. the Sword of Justice',
            url: '/movie/16'
        },
        {
            urlImage: '/movieImages/17.webp',
            name: 'Pokémon the Movie: Genesect and the Legend Awakened',
            url: '/movie/17'
        },
        {
            urlImage: '/movieImages/18.webp',
            name: 'Pokémon the Movie: Diancie and the Cocoon of Destruction',
            url: '/movie/18'
        },
        {
            urlImage: '/movieImages/19.webp',
            name: 'Pokémon the Movie: Hoopa and the Clash of Ages',
            url: '/movie/19'
        },
        {
            urlImage: '/movieImages/20.webp',
            name: 'Pokémon the Movie: Volcanion and the Mechanical Marvel',
            url: '/movie/20'
        },
        {
            urlImage: '/movieImages/21.webp',
            name: 'Pokémon the Movie: I Choose You!',
            url: '/movie/21'
        },
        {
            urlImage: '/movieImages/22.webp',
            name: 'Pokémon the Movie: The Power of Us',
            url: '/movie/22'
        },
        {
            urlImage: '/movieImages/23.webp',
            name: 'Pokémon: Mewtwo Strikes Back Evolution',
            url: '/movie/23'
        },
        {
            urlImage: '/movieImages/24.webp',
            name: 'Pokémon the Movie: Secrets of the Jungle',
            url: '/movie/24'
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
                                <Link href={item.url}>
                                    <button>Download</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}