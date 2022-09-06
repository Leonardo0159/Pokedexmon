import styles from "./Footer.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown } from "react-bootstrap";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.sideLeftTop}>
          <div className={styles.logo}>
            <a className={styles.linkApploja} href="#">
              <span>POKÉDEXMON</span>
            </a>
          </div>
        </div>
        <div className={styles.sideRightTop}>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-between flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/poketv">PokéTv</Nav.Link>
                  <Nav.Link href="/pokedex/1">Pokédex</Nav.Link>
                  <Nav.Link href="/legendary-pokemons">Legendary Pokemon</Nav.Link>
                  <Nav.Link href="/mythical-pokemons">Mythical Pokemon</Nav.Link>
                  <NavDropdown drop="up" title="Types" id="dropdown-button-drop-up">
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
      <div className={styles.footerCenter}>
        <div className={styles.sideLeftCenter}>
          <span>
            Pokédexmon © 2022
          </span>
        </div>
      </div>
    </div>
  );
};