import React from "react";
import Coeur from "../../assets/coeur.jpg";
import compagnie from "../../assets/compagnie.jpg";
import ferme from "../../assets/ferme.jpg";
import nac from "../../assets/nac.jpg";
import { Link } from "react-router-dom";
import "./Home.module.css";

//Component uniquement pour gérer la homepage//
export const HomePage = () => {
  return (
    <>
      <div className="Introduction" />
      <div className="Hero">
        <h1>ANIMATCH</h1>
        <h2>
          {" "}
          Le site de rencontre qu'il vous faut, ou plutôt à votre animal ;D
        </h2>
        <p>
          Vous recherchez un/une compagne pour votre animal afin d'assurer sa
          descendance ? Qu'il soit domestique ou de la ferme vous êtes au bon
          endroit. Passez une annonce afin de faire connaître votre animal dans
          votre région ou sur l'ensemble de la France ! Tout est gratuit ! de
          l'isncription à la mise en relation !
        </p>
        <div>
          <Link to="/deposer-une-annonce">
            <img
              src={Coeur}
              className="coeur"
              alt="Coeur"
              width="160"
              height="140"
            />
          </Link>
        </div>
        <section id="animaux">
          <h2>Voir tous les animaux</h2>
          <ul className="animaux-list">
            <li>
              <Link to="/animaux-domestiques">
                <div className="image-wrapper">
                  <h3>Animaux domestiques</h3>
                  <img src={compagnie} alt="animaux domestiques" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/animaux-de-la-ferme">
                <div className="image-wrapper">
                  <h3>Animaux de la ferme</h3>
                  <img src={ferme} alt="animaux de la ferme" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/autres-nac">
                <div className="image-wrapper">
                  <h3>Autres...</h3>
                  <img src={nac} alt="Autres NAC" />
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};
export default HomePage;
