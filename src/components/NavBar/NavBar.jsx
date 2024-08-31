import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
      <button className={styles.menuButton} onClick={toggleMenu} type="button">
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>
      <ul className={styles.navList}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/animaux-domestiques" onClick={toggleMenu}>
            Animaux domestiques
          </Link>
        </li>
        <li>
          <Link to="/animaux-de-la-ferme" onClick={toggleMenu}>
            Animaux de la ferme
          </Link>
        </li>
        <li>
          <Link to="/autres-nac" onClick={toggleMenu}>
            Autres NAC
          </Link>
        </li>
        <li>
          <Link to="/deposer-une-annonce" onClick={toggleMenu}>
            Déposer une annonce
          </Link>
        </li>
        <li>
          <Link to="/creation-de-compte" onClick={toggleMenu}>
            Créer un compte
          </Link>
        </li>
        <li>
          <Link to="/connexion" onClick={toggleMenu}>
            Connexion
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
