import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AnimauxDomestiques from "./pages/AnimauxDomestiques";
import AnimauxDeLaFerme from "./pages/AnimauxFerme";
import AutresNAC from "./pages/AutresAnimaux";
import DeposerUneAnnonce from "./pages/DeposerAnnonce";
import Home from "./pages/Home";
import FicheAnimal from "./pages/FicheAnimal";
import CreationCompte from "./pages/CreationCompte";
import Connexion from "./pages/Connexion";
import GrilleAnimaux from "./components/GrilleAnimaux";
import animaux from "./data/animaux";
import MentionsLegales from "./components/MentionsLegales";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animaux-domestiques" element={<AnimauxDomestiques />} />
        <Route path="/animaux-de-la-ferme" element={<AnimauxDeLaFerme />} />
        <Route path="/autres-nac" element={<AutresNAC />} />
        <Route path="/deposer-une-annonce" element={<DeposerUneAnnonce />} />
        <Route path="/fiche-animal/:animalId" element={<FicheAnimal />} />
        <Route path="/creation-de-compte" element={<CreationCompte />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
