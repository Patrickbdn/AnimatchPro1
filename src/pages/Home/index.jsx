import React from "react";
import Coeur from "../../assets/coeur.jpg";
import compagnie from "../../assets/compagnie.jpg";
import ferme from "../../assets/ferme.jpg";
import NAC from "../../assets/nac.jpg";
import { Link } from "react-router-dom";

//Component uniquement pour gérer la homepage//
export const HomePage = () => {
  return (
    <>
      <div className="Introduction" />
      <div className="Hero">
        <h1>ANIMATCH</h1>
        <h2>
          Le site de rencontre qu'il vous faut, ou plutôt à votre animal ;D
        </h2>
        <h3>
          Vous recherchez un/une compagne pour votre animal afin d'assurer sa
          descendance ? Qu'il soit domestique ou de la ferme vous êtes au bon
          endroit. Passez une annonce afin de faire connaître votre animal dans
          votre région ou sur l'ensemble de la France ! Tout est gratuit ! de
          l'isncription à la mise en relation !
        </h3>
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
          <ul>
            <li>
              <Link to="/animaux-domestiques">
                Animaux domestiques
                <div className="image-wrapper">
                  <img src={compagnie} alt="animaux domestiques" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/animaux-de-la-ferme">
                Animaux de la ferme
                <div className="image-wrapper">
                  <img src={ferme} alt="animaux de la ferme" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/autres-nac">
                Autres...
                <div className="image-wrapper">
                  <img src={NAC} alt="Autres NAC" />
                </div>
              </Link>
            </li>
          </ul>
        </section>
        <div className="cover-bg-img" />
        <video className="bg-img" autoPlay loop muted>
          <source
            src="animatch/public/4915-181329605_small.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};
export default HomePage;
