import React from "react";
import styles from "./FicheAnimal.module.css";
import { useParams } from "react-router-dom";

const FicheAnimal = () => {
  const { animalId } = useParams();
  return (
    <div className={styles.ficheanimal}>
      <p>Id : {animalId}</p>
      <p>Nom : baboun</p>
      <p>Age : 2 ans</p>
    </div>
  );
};

export default FicheAnimal;
