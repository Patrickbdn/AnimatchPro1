import React from "react";
import animaux from "../../data/animaux";
import GrilleAnimaux from "../../components/GrilleAnimaux";

const AnimauxFerme = () => {
  const animauxFerme = animaux.filter((animal) => animal.categorie === "ferme");
  return (
    <div className="animaux-ferme">
      <h1>Animaux de la Ferme</h1>
      <h2>Bienvenue sur la page des animaux de la ferme.</h2>
      <GrilleAnimaux animaux={animauxFerme} />
    </div>
  );
};

export default AnimauxFerme;
