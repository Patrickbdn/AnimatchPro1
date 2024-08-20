import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/animaux-domestiques">Animaux domestiques</Link>
        </li>
        <li>
          <Link to="/animaux-de-la-ferme">Animaux de la ferme</Link>
        </li>
        <li>
          <Link to="/autres-nac">Autres NAC</Link>
        </li>
        <li>
          <Link to="/creation-de-compte">Déposer une annonce</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
