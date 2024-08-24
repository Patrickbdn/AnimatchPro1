import React from "react";
import animaux from "../../data/animaux";
import GrilleAnimaux from "../../components/GrilleAnimaux";

const AutresAnimaux = () => {
  const AutresAnimaux = animaux.filter((animal) => animal.categorie === "nac");
  return (
    <div className="autres-nac">
      <h1>Autres Animaux de Compagnie</h1>
      <p>Bienvenue sur la page des Nouveaux Animaux de Compagnie.</p>
      <GrilleAnimaux animaux={AutresAnimaux} />
    </div>
  );
};

export default AutresAnimaux;
