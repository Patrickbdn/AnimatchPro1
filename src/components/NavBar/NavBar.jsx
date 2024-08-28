// Importation de la bibliothèque React
import React from "react";

// Importation du composant Link de react-router-dom pour la navigation
import { Link } from "react-router-dom";

// Importation des styles CSS depuis le fichier NavBar.module.css
import styles from "./NavBar.module.css";

// Définition du composant fonctionnel NavBar
export const NavBar = () => {
  return (
    // Élément de navigation avec la classe CSS 'navbar'
    <nav className={styles.navbar}>
      {/* Liste des éléments de navigation */}
      <ul>
        {/* Élément de liste pour le lien vers la page d'accueil */}
        <li>
          <Link to="/">Accueil</Link>
        </li>

        {/* Élément de liste pour le lien vers la page des animaux domestiques */}
        <li>
          <Link to="/animaux-domestiques">Animaux domestiques</Link>
        </li>

        {/* Élément de liste pour le lien vers la page des animaux de la ferme */}
        <li>
          <Link to="/animaux-de-la-ferme">Animaux de la ferme</Link>
        </li>

        {/* Élément de liste pour le lien vers la page des autres NAC */}
        <li>
          <Link to="/autres-nac">Autres NAC</Link>
        </li>

        {/* Élément de liste pour le lien vers la page de dépôt d'annonce */}
        <li>
          <Link to="/deposer-une-annonce">Déposer une annonce</Link>
        </li>

        {/* Élément de liste pour le lien vers la page de création de compte */}
        <li>
          <Link to="/creation-de-compte">Créer un compte</Link>
        </li>

        {/* Élément de liste pour le lien vers la page de connexion */}
        <li>
          <Link to="/connexion">Connexion</Link>
        </li>
      </ul>
    </nav>
  );
};

// Exportation du composant NavBar par défaut
export default NavBar;
