import React from "react";
import { Link } from "react-router-dom";
import "./Home.module.css";

// Component uniquement pour gérer la homepage //
export const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="Introduction" />
        <div className="Hero text-center">
          <h1>ANIMATCH</h1>
          <h2 className="custom-h2">
            Le site de rencontre qu'il vous faut, ou plutôt à votre animal ;D
          </h2>
          <p>
            Vous recherchez un/une compagne pour votre animal afin d'assurer sa
            descendance ? Qu'il soit domestique ou de la ferme vous êtes au bon
            endroit. Passez une annonce afin de faire connaître votre animal
            dans votre région ou sur l'ensemble de la France ! Tout est gratuit
            ! de l'inscription à la mise en relation !
          </p>
          <div className="mb-4">
            <Link to="/deposer-une-annonce">
              <img
                src="/coeur.jpg"
                className="coeur img-fluid rounded"
                alt="Coeur"
                width="160"
                height="140"
              />
            </Link>
          </div>
          <section id="animaux">
            <h2 className="custom-h2">Voir tous les animaux</h2>
            <div className="row">
              <div className="col-12 col-md-4">
                <Link to="/animaux-domestiques">
                  <div className="image-wrapper text-center">
                    <h3>Animaux domestiques</h3>
                    <img
                      src="/compagnie.jpg"
                      alt="animaux domestiques"
                      className="img-fluid rounded"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-12 col-md-4">
                <Link to="/animaux-de-la-ferme">
                  <div className="image-wrapper text-center">
                    <h3>Animaux de la ferme</h3>
                    <img
                      src="/ferme.jpg"
                      alt="animaux de la ferme"
                      className="img-fluid rounded"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-12 col-md-4">
                <Link to="/autres-nac">
                  <div className="image-wrapper text-center">
                    <h3>Autres...</h3>
                    <img
                      src="/nac.jpg"
                      alt="Autres NAC"
                      className="img-fluid rounded"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
