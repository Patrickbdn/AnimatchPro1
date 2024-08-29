// Importation de la bibliothèque React
import React from "react";

// Importation du composant NavBar depuis le répertoire NavBar
import NavBar from "../NavBar/NavBar";

// Importation des styles CSS depuis le fichier Header.module.css
import styles from "./Header.module.css";

// Définition du composant fonctionnel Header
const Header = () => {
  return (
    <header className={styles.header}>
      {/* Affichage de l'image du logo avec les styles CSS appliqués */}
      <img src="/logo.jpg" className={styles.logo} alt="logo" />

      {/* Affichage du composant NavBar */}
      <NavBar />
    </header>
  );
};

// Exportation du composant Header par défaut
export default Header;
