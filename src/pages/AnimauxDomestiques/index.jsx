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
      <p>Bienvenue sur la page des animaux domestiques.</p>
      <GrilleAnimaux animaux={animauxDomestiques} />
    </div>
  );
};

export default AnimauxDomestiques;
