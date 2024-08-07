import React, { useState, useEffect } from "react";
import imageprofile from "../asset/Profile-pic.jpeg";
import { Link } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [numAnimalsToShow, setNumAnimalsToShow] = useState(5);

  return (
    <div className="profil-page-wrapper">
      <div className="Profilcontainer">
        <div className="profil-page-info">
          <img src={imageprofile} alt="Profil" />
          <div className="profil-page-pseudo-mail">
            <p>Pseudo</p>
            <p>email@gmail.com</p>
          </div>
        </div>
        <div className="fav-container">
          <div className="fav-container-title">
            <h2>Mes Animaux favoris</h2>
            <button onClick={showMoreAnimals}>+</button>
          </div>
        </div>
        <div className="fav-animals-list">
          {favorites.length === 0 ? (
            <p>Aucun animal en favoris.</p>
          ) : (
            favorites.slice(0, numAnimalsToShow).map((animal) => (
              <div key={animal.id} className="favorite-animals">
                <Link to={`/AnimalDetailsPage/${animal.id}`}>
                  {animal.name}
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
