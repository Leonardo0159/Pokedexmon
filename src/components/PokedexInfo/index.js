import Image from 'next/image'
import styles from './PokedexInfo.module.css'

export const PokedexInfo = () => {
    return (
        <div className={styles.pokedexInfo}>
            <div className={styles.container}>
                <h1>Pokédex</h1>
                <p>
                    The Pokédex is a high-tech portable virtual encyclopedia that Pokémon Trainers carry around to record all the different species of Pokémon they encounter during their journey as Trainers. In general, when certain requirements are met, the capacity can be increased allowing the Pokédex to store data from other Pokémon, which are not common, as well as Pokémon from other regions.
                </p>
                <p>
                    The Pokédex also serves as a means of identification for the Pokémon trainer, in some Pokémon tournaments the participant's registration is only made if he carries a Pokédex. In addition to showing the basic information of the Pokémon, the Pokédex seems to have a difficulty sensor, because if the trainer has doubts it is activated automatically, also showing information about the confinement of Pokémon in their Poké Balls. Information such as catching Pokémon can also be activated according to the trainer's difficulty. Without proper updates from an expert Pokédex teacher, Pokémon Trainers will not be able to obtain information about new Pokémon from other regions.
                </p>
                <h2>Kanto Dex 1.0</h2>
                <Image width={229} height={176} src='/pokedex/pokedex01.png' />
                <Image width={170} height={202} src='/pokedex/pokedex01closed.png' />
                <p>
                    One of the first Pokédexes to be created, it belongs to the Kanto region. Stores information on the first 151 pokemons. Contains the most basic information that all Pokédexes have. In it you can see the image of the pokémon, its name, number, species, weight and height, as well as a small curiosity about the pokémon. Ash and Gary already had one of these in the anime.
                </p>
                <h2>Johto Dex 1.0</h2>
                <Image width={250} height={225} src='/pokedex/pokedex02.png' />
                <Image width={130} height={210} src='/pokedex/pokedex02closed.png' />
                <p>
                    This pokédex comprises pokemons from Kanto and Johto, making a total of 251 pokemons. Pokémon from other regions can be identified by this pokédex through an update. It introduced new features, such as seeing a pokemon's footprint and also the Unown Dex function, identifying each letter of the Unown alphabet. Characters like Ash and Jimmy have had one of these.
                </p>
                <h2>Hoenn Dex 1.0</h2>
                <Image width={217} height={247} src='/pokedex/pokedex03.png' />
                <Image width={220} height={115} src='/pokedex/pokedex03closed.png' />
                <p>
                    Pokédex developed to collect data from Hoenn's Pokémon. It has information of 202 common pokemons of Hoenn, some of them are native to the region, others of them are common to be seen in Kanto and Johto as well. It has a silhouette comparison, showing the size difference between the trainer and a given pokémon. Ash and May already owned this version of the Pokédex in the anime.
                </p>
                <h2>Kanto Dex 2.0</h2>
                <Image width={235} height={249} src='/pokedex/pokedex04.png' />
                <Image width={220} height={128} src='/pokedex/pokedex04closed.png' />
                <p>
                    An improved version of the Kanto Pokédex. It was the first Pokédex to appear in colors other than the traditional red. She is able to show the evolutionary line of pokemons on her visor. Information about the Pokémon's habitat can also be viewed. Ash and May also had this version.
                </p>
                <h2>Sinnoh Dex 1.0</h2>
                <Image width={248} height={205} src='/pokedex/pokedex05.png' />
                <Image width={220} height={139} src='/pokedex/pokedex05closed.png' />
                <p>
                    Initially, it contained information on the 151 most common Pokemon in Sinnoh. Later, with the emergence of new evolved forms of various pokémons, this number jumped to 210. It was the first to have two displays. It has a feature with a comparative scale, displaying the difference in weight between the trainer and a given pokémon. It is able to identify differences between males and females and Pokémon that have alternate forms. In the anime she has appeared with Ash, Paul, Dawn, among other characters.
                </p>
                <p>
                    An improved version of the Kanto Pokédex. It was the first Pokédex to appear in colors other than the traditional red. She is able to show the evolutionary line of pokemons on her visor. Information about the Pokémon's habitat can also be viewed. Ash and May also had this version.
                </p>
                <h2>Johto Dex 2.0</h2>
                <Image width={152} height={251} src='/pokedex/pokedex06.png' />
                <Image width={136} height={209} src='/pokedex/pokedex06closed.png' />
                <p>
                    Yanmega, Ambipom, Lickilicky, Tangrowth and Mamoswine (pokémons that evolve per learned move) were included in the list, totaling 256 pokémons. It contains several features that the other Pokédexes have, gathered in a single Pokédex. The list of pokemons is presented in a better way. It comes with a kind of pen on the side, used to easily handle the lower display, which is touch sensitive. She has been seen with Lyra and Khoury in the anime.
                </p>
                <h2>Unova Dex 1.0</h2>
                <Image width={212} height={247} src='/pokedex/pokedex07.png' />
                <Image width={170} height={193} src='/pokedex/pokedex07closed.png' />
                <p>
                    The first to have a pokémon listed at position #000, the list ends at #155, totaling 156 pokémon stored in this pokédex. It keeps images of Pokemon from different perspectives (front, back, sides). It has the ability to scan and display Pokemon in their shiny coloration, if the wielder finds any. Ash, Trip, Bianca, Dawn, Georgia and Cameron have a copy of this Pokédex.
                </p>
                <h2>Kalos Dex 1.0</h2>
                <Image width={168} height={250} src='/pokedex/pokedex08.png' />
                <Image width={170} height={193} src='/pokedex/pokedex08closed.png' />
                <p>
                    It is divided into three sections: Central Kalos Pokédex, Coastal Kalos Pokédex, and Mountain Kalos Pokédex. Each one has about 150 pokemons that are distributed among the 3 areas of Kalos. It has a holographic display and brings back many of the functions of previous Pokédexes. When National Mode is enabled, it separates the Pokemon of each generation by color. Ash and Serena own this Pokédex.
                </p>
                <h2>Hoenn Dex 2.0</h2>
                <Image width={250} height={151} src='/pokedex/pokedex09.png' />
                <Image width={234} height={150} src='/pokedex/pokedex09closed.png' />
                <p>
                    It brings together several of the functions of the pokédex that existed until then: growl, height, weight, size comparison with the trainer, visualization of the pokémon from different angles, habitat, shapes, regional and national division, among others. There's also a search function that locates shiny forms and mega evolutions if they're registered. Ash and Serena also had this Pokédex.
                </p>
                <h2>Alola Rotom Dex</h2>
                <Image width={250} height={196} src='/pokedex/pokedex10.png' />
                <Image width={200} height={220} src='/pokedex/pokedex10closed.png' />
                <p>
                    A special Pokédex that works when a Rotom is housed inside it. He can communicate verbally with the trainer. It has a map function that helps the coach to identify his next destination. You can scan QR codes and register Pokemon this way. It also has a camera function that can take pictures of pokemon found. It is divided into 4 sections: Melemele Pokédex, Akala Pokédex, Ula'ula Pokédex and Poni Pokédex. Each section represents one of Alola's islands. Each has between 100 and 130 pokemons, but it records about 300 pokemons that can be found in Alola (some pokemons can be found repeated in more than one section of this pokédex). It also displays how many % of the total number of pokemons it records have already been captured. Ash had a model of this Pokédex.
                </p>
                <h2>Kanto Dex 3.0</h2>
                <Image width={250} height={202} src='/pokedex/pokedex11.png' />
                <Image width={151} height={210} src='/pokedex/pokedex11closed.gif' />
                <p>
                    Brings back the original 151 Pokemon. It is programmed to bring some more specific details of each species captured. For example, if you have caught several pokémons of the same species, it will indicate how many were caught from that pokémon. This version also indicates if a Pokemon is bigger or smaller than the average one, either in height or in weight. There is a log that shows the weight of the heaviest and lightest pokemon you've ever caught of a given species, as well as the height of the tallest and shortest caught of that species. No characters have appeared in the anime with this pokédex version yet.
                </p>
                <h2>Galar Rotom Phone</h2>
                <Image width={108} height={250} src='/pokedex/pokedex12.png' />
                <Image width={224} height={250} src='/pokedex/pokedex12closed.png' />
                <p>
                    When a Rotom is hosted inside a smartphone, it becomes a Rotom Phone and works like a Pokédex. Unlike the Rotom Dex, it does not communicate with the trainer, but is still able to indicate the trainer's next destination on its map. It also has alerts for events around the Galar Wilderness, such as changes in the weather. In addition to the traditional Pokédex functions, the Rotom Phone can be integrated into a bicycle known as the Rotom Bike. With the help of the Rotom Phone, this bike is capable of accelerating at incredible speed, as well as inflating buoys that allow you to ride your bike on water. Unlike the Kalos and Alola Pokédexes, the Galar Pokédex is not divided into sections, but it can receive updates and gain sections related to the Isle of Armor and Crown Tundra pokémons. The Rotom Phone screen can display the information either vertically or horizontally. In the anime, Ash and Goh have this pokédex. Jessie, James and Meowth also received a model of this Pokédex from Giovanni, but it has a sloppy personality and sometimes gives poor quality information. A few other random trainers from the anime have also been shown to possess this model. The Rotom Phone assists in locating competitors in the World Coronation Series and displays which ranking position the trainer is in. Many of the competitors own a Rotom Phone.
                </p>
            </div>
        </div>
    )
}