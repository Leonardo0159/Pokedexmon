import styles from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import Router from 'next/router'
import { useState } from "react";

export const Header = () => {
  
  const searchPokemon = () => {
    let search = document.getElementById('search').value
    
    if (search != "") {
      Router.push('/pokemon/'+search.toLowerCase())
    } 
  }

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
            <input id="search" placeholder="Search pokemon" />
            <button onClick={searchPokemon}>
              <BsSearch size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};