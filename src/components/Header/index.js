import styles from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerMain}>
          <Link href="/">
            <div className={styles.logo}>
              <img alt="pokedexmon website logo" src="/Pokedexmon.png" />
            </div>
          </Link>
          <div className={styles.search}>
            <input placeholder="Pesquise Aqui" />
            <button>
              <BsSearch size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};