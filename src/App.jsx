import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import AnimauxDomestiques from "./pages/AnimauxDomestiques";
import AnimauxDeLaFerme from "./pages/AnimauxFerme";
import AutresNAC from "./pages/AutresAnimaux";
import DeposerUneAnnonce from "./pages/DeposerAnnonce";
import Home from "./pages/Home";
import FicheAnimal from "./pages/FicheAnimal";
import { useDispatch } from "react-redux";
import { saveFormData } from "./formSlice";

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
      </Routes>
    </MainLayout>
  );
}

export default App;
