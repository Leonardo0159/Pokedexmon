import styles from "./Header.module.css";
import { BsSearch, BsCartFill, BsTelephoneFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerMain}>
          <Link href="/">
            <div className={styles.logo}>
              <img src="/Pokedexmon.png" />
            </div>
          </Link>
          <div className={styles.search}>
            <input placeholder="Pesquise Aqui" />
            <button>
              <BsSearch size={20} />
            </button>
          </div>
          <div className={styles.login}>
            <Link href="/admin">
              <button>
                <FaUserCircle size={20} />
              </button>
            </Link>
            <button>
              <BsCartFill size={20} />
            </button>
          </div>
        </div>
        <div className={styles.headerBotton}>
          <nav>
            <ul>
              <li>POKÉMONS</li>
              <li>POKÉMONS</li>
              <li>POKÉMONS</li>
              <li>POKÉMONS</li>
              <li>POKÉMONS</li>
              <li>POKÉMONS</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};