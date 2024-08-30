import React from "react";
import styles from "./FicheAnimal.module.css";
import { useParams } from "react-router-dom";
import animaux from "../../data/animaux";

const FicheAnimal = () => {
  const { animalId } = useParams();
  const animal = animaux.find((animal) => animal.id === parseInt(animalId));
  if (!animal) {
    return <h1>Non trouvé</h1>;
  }
  return (
    <div className={styles.ficheanimal}>
      <img src={animal.image} alt={animal.nom} className="animal-image" />
      <p>Nom : {animal.nom}</p>
      <p>Sexe : {animal.sexe}</p>
      <p>Race : {animal.race}</p>
      <p>Espèce : {animal.espece}</p>
      <p>Couleur : {animal.couleur}</p>
      <p>Age : {animal.age} ans</p>
    </div>
  );
};

export default FicheAnimal;
