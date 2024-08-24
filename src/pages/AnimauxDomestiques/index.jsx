import React from "react";
import animaux from "../../data/animaux";
import GrilleAnimaux from "../../components/GrilleAnimaux";

const AnimauxDomestiques = () => {
  const animauxDomestiques = animaux.filter(
    (animal) => animal.categorie === "domestique"
  );
  return (
    <div className="animaux-domestiques">
      <h1>Animaux Domestiques</h1>
      <h2>Bienvenue sur la page des animaux domestiques.</h2>
      <GrilleAnimaux animaux={animauxDomestiques} />
    </div>
  );
};

export default AnimauxDomestiques;
