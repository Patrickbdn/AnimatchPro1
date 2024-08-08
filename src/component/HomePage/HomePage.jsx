import React from "react";
import "./Styles.module.css";
import Coeur from "../../assets/Coeur.jpeg";
import compagnie from "../../assets/compagnie.jpg";
import ferme from "../../assets/ferme.jpg";
import NAC from "../../assets/NAC.JPG";

//Component uniquement pour gérer la homepage//
export const HomePage = () => {
  return (
    <>
      {" "}
      <div className="Introduction"></div>
      <div className="Hero">
        <h1>ANIMATCH</h1>
        <h2>
          Le site de rencontre qu’il vous faut, ou plutôt à votre animal ;D
        </h2>
        <h3>
          Vous recherchez un/une compagne pour votre animal afin d’assurer sa
          descendance ? Qu’il soit domestique ou de la ferme vous êtes au bon
          endroit. Passez une annonce afin de faire connaître votre animal dans
          votre région ou sur l’ensemble de la France ! Tout est gratuit ! de
          l’isncription à la mise en relation !
        </h3>
        <div>
          <div>
            <li></li>
          </div>
        </div>
        <section id="animaux">
          <h2>Voir tous les animaux</h2>
          <ul>
            <li>
              <a href="/">
                Animaux domestiques
                <div class="image-wrapper">
                  <img src={compagnie} alt="animaux domestiques" />
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                Animaux de la ferme
                <div class="image-wrapper">
                  <img src={ferme} alt="animaux de la ferme" />
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                Autres...
                <div class="image-wrapper">
                  <img src={NAC} alt="Autres NAC" />
                </div>
              </a>
            </li>
          </ul>
        </section>
        <div className="cover-bg-img"></div>
        <video className="bg-img" autoPlay loop muted>
          <source
            src="animatch/public/4915-181329605_small.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </>
  );
};
export default HomePage;
