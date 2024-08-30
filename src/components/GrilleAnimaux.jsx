// Importation de la bibliothèque React
import React from "react";

// Importation des styles CSS depuis le fichier Grille.module.css
import styles from "./Grille.module.css";

// Définition du composant fonctionnel GrilleAnimaux
const GrilleAnimaux = (props) => {
  return (
    // Conteneur principal de la grille avec la classe CSS 'grille'
    <div className={styles.grille}>
      {/* Parcours de la liste des animaux passée en props */}
      {props.animaux.map((animal) => (
        // Conteneur pour chaque carte d'animal
        <div className="carte-animal" key={animal.id}>
          {/* Affichage de l'image de l'animal */}
          <a href={"/fiche-animal/" + animal.id}>
            <img src={animal.image} alt={animal.nom} className="animal-image" />
          </a>
          {/* Liste des informations sur l'animal */}
          <ul>
            <li>Espèce : {animal.espece}</li>
            <li>Prénom : {animal.nom}</li>
            <li>Âge : {animal.age} an(s)</li>
            <li>Sexe : {animal.sexe}</li>
            {/* Affichage de la photo de l'animal (redondant avec l'image) */}
            <li>{animal.photo}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

// Exportation du composant GrilleAnimaux par défaut
export default GrilleAnimaux;
