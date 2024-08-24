import React from "react";
import styles from "./Grille.module.css";

const GrilleAnimaux = (props) => {
  return (
    <div className={styles.grille}>
      {props.animaux.map((animal) => (
        <div className="carte-animal">
          <img src={animal.image} alt={animal.nom} className="animal-image" />
          <ul>
            <li>Espèce :{animal.espece}</li>
            <li>Prenom : {animal.nom}</li>
            <li>Age : {animal.age} an(s)</li>
            <li>Sexe :{animal.sexe}</li>
            <li>{animal.photo}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
export default GrilleAnimaux;
