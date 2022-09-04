import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MoviePresentation } from "../../components/MoviePresentation";
import { useRouter } from "next/router";

const Movie = ({movie}) => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{movie.name} | Pokédexmon</title>
                <meta name="description" content={movie.description} />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={movie.name+" | Pokédexmon"} />
                <meta property="og:description" content={movie.description} />
                <meta property="og:url" content={"https://www.pokedexmon.com"+movie.url} />
                <meta property="og:site_name" content="Pokédexmon" />
                <meta property="og:image" content="/pokeball.png" />
                <meta property="og:image:width" content="183" />
                <meta property="og:image:height" content="224" />
            </Head>

            <Header />
            <MoviePresentation movie={movie}/>
            <Footer />

        </div>
    )
}

export async function getServerSideProps(context) {
    let movie
    
    if (context.query.id == 1) {
        movie = {
            urlImage: '/movieImages/01.webp',
            name: 'Pokémon: The First Movie',
            url: '/movie/1',
            release: '1998',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 36 Min',
            imdb: '6.2',
            description: "When a group of scientists are offered funding into genetic research if they agree to try and clone the greatest ever Pokémon, Mew, the end result is success and Mewtwo is born. However Mewtwo is bitter about his purpose in life and kills his masters. In order to become the greatest he throws open a challenge to the world to battle him and his Pokémon. Ash and his friends are one of the few groups of trainers who pass the first test and prepare for battle. However they soon find out about further cloning and Mewtwo's ultimate plan for the earth.",
            downloadPt: 'https://seulink.net/pokedexmon-filme1',
            downloadEn: ''
        }
    } else if (context.query.id == 2){
        movie = {
            urlImage: '/movieImages/02.webp',
            name: 'Pokémon: The Movie 2000',
            url: '/movie/2',
            release: '1999',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 24 Min',
            imdb: '6.0',
            description: "An evil genius in a flying fortress is trying to kidnap the birds of the fire, ice, and lightning islands in hopes of luring the sea power, Lugia, and controlling the world. Ash and his friends, in the process of carrying out an island tradition that requires visiting those three islands, discover the plot and try to stop it. Even the comic villains, Team Rocket, turn good and help out in the end against the threat of world destruction. And Pokemon assemble from all around the world in case they can be of help (but they end up helping only the merchandising).",
            downloadPt: 'https://seulink.net/pokedexmon-filme2',
            downloadEn: ''
        }
    } else if (context.query.id == 3){
        movie = {
            urlImage: '/movieImages/03.webp',
            name: 'Pokémon 3: Spell of the Unown',
            url: '/movie/3',
            release: '2000',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 33 Min',
            imdb: '5.8',
            description: "Professor Shuri is a scientist looking for rare Pocket Monsters. He reads a storybook to his daughter Mi about the powerful Pokemon Entei. Shuri is currently searching for the heiroglyph Pokemon Unknown. While searching through some ancient artifacts, Shuri awakens Unknown and is sucked into it. Mi next awakens Unknown while looking for her father. Unknown bonds with her and turns her mansion into a Crystal Tower. The crystallization begins to spread. Unknown lives to serve Mi and creates an Entei with the personality of her father to make her happy. When Mi next desires a mother, Entei kidnaps Satoshi's mother Hanako to give to Mi. Satoshi, Kasumi, Takeshi, and of course Pikachu set out to get her back.",
            downloadPt: 'https://seulink.net/pokedexmon-filme3',
            downloadEn: ''
        }
    } else if (context.query.id == 4){
        movie = {
            urlImage: '/movieImages/04.webp',
            name: 'Pokémon 4Ever',
            url: '/movie/4',
            release: '2001',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 15 Min',
            imdb: '5.7',
            description: "This movie centers around the new pokémon Celebi, a one-of-a-kind veggie-like bug whose only kin are celebi from other points in time. The movie begins in the past where a young boy named Sam attempts to save Celebi from a hunter. In a reciprocal effort, Celebi uses his power and transports itself and Sam to the present, Ash Ketchum's time. Sam and Ash become good friends as they fight to save Celebi from the new Team Rocket villain, the Iron-Masked Marauder and his darkball, which turns pokémon evil and augments their powers to the maximum. Yet, one rare pokémon isn't safe without help from another - thus enters Suicune, a.k.a. the North Wind.",
            downloadPt: 'https://seulink.net/pokedexmon-filme4',
            downloadEn: ''
        }
    } else if (context.query.id == 5){
        movie = {
            urlImage: '/movieImages/05.webp',
            name: 'Pokémon Heroes',
            url: '/movie/5',
            release: '2002',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 20 Min',
            imdb: '6.0',
            description: "Ash, Pikachu and the rest of the Pokemon gang try and stop a pair of thieves hiding out in the canals and alleyways of Alto Mare, the water capital of the world. Joining the adventure are two new Pokémons, a brother/sister pair named Latias and Latios who are protecting the Droplet of the Heart - a valuable treasure.",
            downloadPt: 'https://seulink.net/pokedexmon-filme5',
            downloadEn: ''
        }
    } else if (context.query.id == 6){
        movie = {
            urlImage: '/movieImages/06.webp',
            name: 'Pokémon: Jirachi Wish Maker',
            url: '/movie/6',
            release: '2003',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 21 Min',
            imdb: '5.7',
            description: "A magician attempts to use the power of the Millennium Comet to awaken the legendary Pokémon Groudon.",
            downloadPt: 'https://seulink.net/pokedexmon-filme6',
            downloadEn: ''
        }
    } else if (context.query.id == 7){
        movie = {
            urlImage: '/movieImages/07.webp',
            name: 'Pokémon: Destiny Deoxys',
            url: '/movie/7',
            release: '2004',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 38 Min',
            imdb: '6.0',
            description: "A comet bearing a deadly Pokemon creature crash-lands onto Earth, terrorising a nearby high-tech city, where Ash, Pikachu and friends are currently visiting...",
            downloadPt: 'https://seulink.net/pokedexmon-filme7',
            downloadEn: ''
        }
    } else if (context.query.id == 8){
        movie = {
            urlImage: '/movieImages/08.webp',
            name: 'Pokémon: Lucario and the Mystery of Mew',
            url: '/movie/8',
            release: '2005',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 43 Min',
            imdb: '6.8',
            description: "In the town of Lohta, a festival is thrown praising Aaron the Wave Leader Hero who, according to the legend passed down through the town's generations, stopped a war centuries ago by using the power of the Tree of the World's Origin. Satoshi and Pikachu participate in a battle to decide this year's hero and after their victory, they are chosen as the Wave Leader Hero. A grand dance party is held in the castle to celebrate the victor, but suddenly the phantom Pokemon Mew appears and takes Pikachu. Soon afterwards, the Wave Leader Pokemon Lucario is freed from his centuries-long seal and meets Satoshi. Satoshi must solve the various mysteries of where Pikachu is, what Mew's after, what the secret of the legend of the Wave Leader is and how it ties in with Lucario's hidden past as he makes his way to the Tree of the World's Origin with Lucario.",
            downloadPt: 'https://seulink.net/pokedexmon-filme8',
            downloadEn: ''
        }
    } else if (context.query.id == 9){
        movie = {
            urlImage: '/movieImages/09.webp',
            name: 'Pokémon Ranger and the Temple of the Sea',
            url: '/movie/9',
            release: '2006',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 45 Min',
            imdb: '5.9',
            description: "It all started with a legend passed down from the People of the Water - Somewhere in this world, there is a Sea Temple created by the People of the Water. The Sea Temple contains a hidden treasure called the Sea Crown, but no one has ever seen the Sea Crown, or even the Sea Temple, because the temple is protected by a secret mechanism. The temple drifts through a vast ocean undetected, waiting - waiting... Ash and Pikachu meet Lizabeth, a descendant of the People of the Water, and learn about the legend. They also meet Jackie, a Pokémon Ranger on a secret mission to protect a Manaphy egg (Manaphy is mysteriously known as The Prince of the Sea) and find the Sea Temple as well. The Phantom plans to obtain the Sea Crown and take over the world - but first he needs the Manaphy egg. Now Lizabeth and Ash must help Jackie protect the egg and stop the nefarious pirate.",
            downloadPt: 'https://seulink.net/pokedexmon-filme9',
            downloadEn: ''
        }
    } else if (context.query.id == 10){
        movie = {
            urlImage: '/movieImages/10.webp',
            name: 'Pokémon: The Rise of Darkrai',
            url: '/movie/10',
            release: '2007',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 35 Min',
            imdb: '6.3',
            description: "Ash and friends (this time accompanied by newcomer Dawn) arrive at an idyllic village on their way to their next Pokemon contest, where chaos will soon erupt with the prophecy of two Pokemon Gods (Dialga and Palkia) and the arrival of a mysterious, seemingly deadly Pokemon named Darkrai, which has the power to distort space and time.",
            downloadPt: 'https://seulink.net/pokedexmon-filme10',
            downloadEn: ''
        }
    } else if (context.query.id == 11){
        movie = {
            urlImage: '/movieImages/11.webp',
            name: 'Pokémon: Giratina & the Sky Warrior',
            url: '/movie/11',
            release: '2008',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 40 Min',
            imdb: '6.0',
            description: "When a new Pokèmon emerges able to create parallel dimensions, it's up to Ash Ketchum and his friends to stop a mysterious stranger from using its powers for evil!",
            downloadPt: 'https://seulink.net/pokedexmon-filme11',
            downloadEn: ''
        }
    } else if (context.query.id == 12){
        movie = {
            urlImage: '/movieImages/12.webp',
            name: 'Pokémon: Arceus and the Jewel of Life',
            url: '/movie/12',
            release: '2009',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 35 Min',
            imdb: '6.2',
            description: "Long ago, Arceus granted a fragment of its power as the Jewel of Life to help Michina in the town's hour of need, only to be betrayed when it was time for that power to be returned. After so many years, Arceus is about to return to reclaim its stolen power- enraged, vengeful, and seemingly unstoppable. Not even the combined might of Dialga, Palkia, and Giratina can stop Arceus from devastating all existence across the dimensions. But Ash and his companions, joining forces with their new friend Sheena, May have discovered the only way to redeem that ancient betrayal. Their journey will be both dangerous and uncertain: even if Ash and his friends can set an old wrong right again, will there be time to return the Jewel of Life before Arceus destroys everything and everyone they've ever known?",
            downloadPt: 'https://seulink.net/pokedexmon-filme12',
            downloadEn: ''
        }
    } else if (context.query.id == 13){
        movie = {
            urlImage: '/movieImages/13.webp',
            name: 'Pokémon: Zoroark: Master of Illusions',
            url: '/movie/13',
            release: '2010',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 36 Min',
            imdb: '6.0',
            description: "A greedy, manipulative media mogul seeks to capture Celebi for nefarious purposes, using the shape-shifting Pokémon Zoroark to hunt it down.",
            downloadPt: 'https://seulink.net/pokedexmon-filme13',
            downloadEn: ''
        }
    } else if (context.query.id == 14){
        movie = {
            urlImage: '/movieImages/14.webp',
            name: 'Pokémon the Movie: Black Victini and Reshiram',
            url: '/movie/14',
            release: '2011',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 28 Min',
            imdb: '5.6',
            description: "Victini, a legendary Pokémon, unable to leave the boundaries of its hometown, is targeted by a determined villager to restore the homelands of his ancestors.",
            downloadPt: 'https://seulink.net/pokedexmon-filme1',
            downloadEn: ''
        }
    } else if (context.query.id == 15){
        movie = {
            urlImage: '/movieImages/15.webp',
            name: 'Pokémon the Movie: White Victini and Zekrom',
            url: '/movie/15',
            release: '2011',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 37 Min',
            imdb: '5.7',
            description: "During their travels through the Unova region, Ash and his friends Iris and Cilan arrive in Eindoak Town, built around a castle called the Sword of the Vale. The three Trainers have come to compete in the town's annual battle competition, and Ash manages to win with some unexpected help from the Mythical Pokémon Victini. It turns out Victini has a special bond with this place. Long ago, the castle watched over the Kingdom of the Vale, and the partnership between Victini and the king protected its people who lived there. But that kingdom has since vanished into memory, leaving behind powerful relics and ancient Pokémon. Damon, a descendant of the People of the Vale, is trying to restore the lost kingdom with the help of his Reuniclus. His quest has taken him to the far reaches of the barren desert, and he has convinced the Legendary Pokémon Reshiram to join him in the search for truth. Damon plans to trap Victini and harness its power, and as that plan gets under way, the entire town of Eindoak faces disaster. Can Ash awaken the Legendary Pokémon Zekrom to help him stop Damon and save Victini?",
            downloadPt: 'https://seulink.net/pokedexmon-filme1',
            downloadEn: ''
        }
    } else if (context.query.id == 16){
        movie = {
            urlImage: '/movieImages/16.webp',
            name: 'Pokémon the Movie: Kyurem vs. the Sword of Justice',
            url: '/movie/16',
            release: '2012',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 12 Min',
            imdb: '5.4',
            description: "An over zealous pokemon called Keldeo enrages a very powerful Kyurem, with the help of Ash and Pikachu can Keldeo become a sword of justice and defeat the mighty Kyurem?",
            downloadPt: 'https://seulink.net/pokedexmon-filme1',
            downloadEn: ''
        }
    } else if (context.query.id == 17){
        movie = {
            urlImage: '/movieImages/17.webp',
            name: 'Pokémon the Movie: Genesect and the Legend Awakened',
            url: '/movie/17',
            release: '2013',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 36 Min',
            imdb: '5.4',
            description: "Ash, Pikachu, and friends must stop Mewtwo and a group of Genesect from the destroying the city.",
            downloadPt: 'https://seulink.net/pokedexmon-filme1',
            downloadEn: ''
        }
    } else if (context.query.id == 18){
        movie = {
            urlImage: '/movieImages/18.webp',
            name: 'Pokémon the Movie: Diancie and the Cocoon of Destruction',
            url: '/movie/18',
            release: '2014',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 16 Min',
            imdb: '5.4',
            description: "When Diancie a Pokémon said to create diamond travels to find Xerneas to help her make a heart diamond to save her home, Ash, Serena, Clemont and Bonnie help her to be safe on the way from thieves.",
            downloadPt: 'https://seulink.net/pokedexmon-filme1',
            downloadEn: ''
        }
    } else if (context.query.id == 19){
        movie = {
            urlImage: '/movieImages/19.webp',
            name: 'Pokémon the Movie: Hoopa and the Clash of Ages',
            url: '/movie/19',
            release: '2015',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 19 Min',
            imdb: '5.8',
            description: "When Ash, Pikachu, and their friends visit a desert city by the sea, they meet the Mythical Pokémon Hoopa, who has the ability to summon things-including people and Pokémon-through its magic ring. After a scary incident, they learn a story about a brave hero who stopped the rampage of a terrifying Pokémon long ago. Now, the threat that has been bottled up for years is in danger of breaking loose again! Can Ash help his new friend overcome the darkness within...or will a dangerous secret erupt into a clash of legends?",
            downloadPt: 'https://seulink.net/pokedexmon-filme1',
            downloadEn: ''
        }
    } else if (context.query.id == 20){
        movie = {
            urlImage: '/movieImages/20.webp',
            name: 'Pokémon the Movie: Volcanion and the Mechanical Marvel',
            url: '/movie/20',
            release: '2016',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 30 Min',
            imdb: '5.9',
            description: "Ash meets the Mythical Pokémon Volcanion when it crashes down from the sky, creating a cloud of dust-and a mysterious force binds the two of them together! Volcanion despises humans and tries to get away, but it's forced to drag Ash along as it continues its rescue mission. They arrive in a city of cogs and gears, where a corrupt official has stolen the ultimate invention: the Artificial Pokémon Magearna, created 500 years ago. He plans to use its mysterious power to take control of this mechanical kingdom! Can Ash and Volcanion work together to rescue Magearna? One of the greatest battles in Pokémon history is about to unfold!",
            downloadPt: 'https://seulink.net/pokedexmon-filme1',
            downloadEn: ''
        }
    } else if (context.query.id == 21){
        movie = {
            urlImage: '/movieImages/21.webp',
            name: 'Pokémon the Movie: I Choose You!',
            url: '/movie/21',
            release: '2017',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 38 Min',
            imdb: '6.3',
            description: "Ash Ketchum, a kid from Pallet Town, embarks on a journey across the Kanto region to become a Pokemon Master. With his partner Pikachu, who at first hated Ash. But the bond of Pikachu and Ash builds as they travel to beat gyms and enter the league of Kanto.",
            downloadPt: 'https://seulink.net/pokedexmon-filme1',
            downloadEn: ''
        }
    } else if (context.query.id == 22){
        movie = {
            urlImage: '/movieImages/22.webp',
            name: 'Pokémon the Movie: The Power of Us',
            url: '/movie/22',
            release: '2018',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 40 Min',
            imdb: '6.2',
            description: "Every year the citizens of Fura City celebrate a Wind Festival. Where people live together with the wind. Long Ago, on the final day of the festival the Legendary Pokemon Lugia and bestow the blessings of the wind upon the people. This Film Focuses on Everyone's Story. from Lisa, a high school girl who is just starting out as a Pokemon trainer, to Karachi, a guy who can't stop lying to Torito, a researcher who lacks confidence in himself, to Hisui, an old lady who hates touching Pokemon, and Rarugo, a mysterious young girl who watches over the forest by herself.",
            downloadPt: 'https://seulink.net/pokedexmon-filme1',
            downloadEn: ''
        }
    } else if (context.query.id == 23){
        movie = {
            urlImage: '/movieImages/23.webp',
            name: 'Pokémon: Mewtwo Strikes Back Evolution',
            url: '/movie/23',
            release: '2019',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 38 Min',
            imdb: '5.7',
            description: "After a scientific experiment leads to the creation of a clone of Mewtwo, he sets out to destroy the world. Ash and his friends then decide to thwart Mewtwo's evil plans.",
            downloadPt: 'https://seulink.net/pokedexmon-filme1',
            downloadEn: ''
        }
    } else if (context.query.id == 24){
        movie = {
            urlImage: '/movieImages/24.webp',
            name: 'Pokémon the Movie: Secrets of the Jungle',
            url: '/movie/24',
            release: '2020',
            genre: 'Animation | Action | Adventure',
            format: 'MP4',
            quality: 'WEB-DL',
            language: 'Portuguese | English',
            duration: '1h 39 Min',
            imdb: '6.4',
            description: "The story of Koko, a young boy raised by Pokémon, and the creation of a new bond between humans and Pokémon.",
            downloadPt: 'https://seulink.net/pokedexmon-filme1',
            downloadEn: ''
        }
    } else {
        movie = {
            urlImage: '',
            name: 'Not Found',
            url: '',
            release: '',
            genre: '',
            format: '',
            quality: '',
            language: '',
            duration: '',
            imdb: '',
            description: "",
            downloadPt: '',
            downloadEn: ''
        }
    }

    return { props: { movie } }
}

export default Movie;