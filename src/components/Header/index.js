import styles from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import Router from 'next/router'
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {

  const searchPokemon = () => {
    let search = document.getElementById('search').value

    if (search != "") {
      Router.push('/pokemon/' + search.toLowerCase())
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
        <div className={styles.headerNav}>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-between flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/pokedex/1">Pokédex</Nav.Link>
                  <Nav.Link href="/legendary-pokemons">Legendary Pokemon</Nav.Link>
                  <Nav.Link href="/mythical-pokemons">Mythical Pokemon</Nav.Link>
                  <NavDropdown title="Types" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/types-pokemon/normal">Normal</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/fire">Fire</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/water">Water</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/grass">Grass</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/flying">Flying</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/fighting">Fighting</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/poison">Poison</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/electric">Electric</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/ground">Ground</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/rock">Rock</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/psychic">Psychic</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/ice">Ice</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/bug">Bug</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/ghost">Ghost</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/steel">Steel</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/dragon">Dragon</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/dark">Dark</NavDropdown.Item>
                    <NavDropdown.Item href="/types-pokemon/fairy">Fairy</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};