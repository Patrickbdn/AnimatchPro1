import React from "react";
// import { Link } from "react-router-dom";
import "./Styles.module.css";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/">Animaux domestiques</a>
        </li>
        <li>
          <a href="/">Animaux de la ferme</a>
        </li>
        <li>
          <a href="/">Autres NAC</a>
        </li>
        <li>
          <a href="/">Déposer une annonce</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
