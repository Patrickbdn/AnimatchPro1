// Importation de la bibliothèque React
import React from "react";

// Importation des icônes de réseaux sociaux depuis le répertoire des assets
import facebookIcon from "../../assets/social/facebook.jpg";
import instagramIcon from "../../assets/social/instagram.jpg";
import twitterIcon from "../../assets/social/twitter.jpg";

// Importation du composant Link de react-router-dom pour la navigation
import { Link } from "react-router-dom";

// Définition du composant fonctionnel Footer
const Footer = () => {
  return (
    <footer className="footer">
      {/* Lien vers Instagram avec l'icône Instagram */}
      <a href="https://instagram.com">
        <img src={instagramIcon} alt="instagram" width="50" height="50" />
      </a>

      {/* Lien vers Facebook avec l'icône Facebook */}
      <a href="https://facebook.com">
        <img src={facebookIcon} alt="facebook" width="50" height="50" />
      </a>

      {/* Lien vers Twitter avec l'icône Twitter */}
      <a href="https://x.com">
        <img src={twitterIcon} alt="x" width="50" height="50" />
      </a>

      {/* Texte indiquant le créateur de l'application */}
      <p>Créateur d'Animatch Patrick Bodin</p>

      {/* Texte indiquant la version de l'application */}
      <p>Version 1.1 sous Réact </p>

      {/* Lien vers les mentions légales */}
      <Link to="/mentions-legales">Mentions Légales</Link>

      {/* Texte indiquant le RGPD */}
      <p>RGPD</p>

      {/* Remerciements */}
      <p>Merci : Figma, Lococco.com, tristanremy.com</p>

      {/* Texte indiquant les droits réservés */}
      <p>Tous droits réservés</p>
    </footer>
  );
};

// Exportation du composant Footer par défaut
export default Footer;
