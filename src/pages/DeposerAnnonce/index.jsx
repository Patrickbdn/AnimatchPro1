import React from "react";

const DeposerUneAnnonce = () => {
  return (
    <div className="deposer-une-annonce">
      <h1>Déposer une annonce</h1>
      <p>Bienvenue sur la page pour déposer une annonce.</p>
      <form>
        <label htmlFor="titre">Titre de l'annonce:</label>
        <input type="text" id="titre" name="titre" required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" required />

        <label htmlFor="categorie">Catégorie:</label>
        <select id="categorie" name="categorie" required>
          <option value="">Sélectionnez une catégorie</option>
          <option value="animaux-domestiques">Animaux domestiques</option>
          <option value="animaux-de-la-ferme">Animaux de la ferme</option>
          <option value="autres-nac">Autres NAC</option>
        </select>

        <label htmlFor="prix">Prix:</label>
        <input type="number" id="prix" name="prix" min="0" required />

        <button type="submit">Déposer l'annonce</button>
      </form>
    </div>
  );
};

export default DeposerUneAnnonce;
