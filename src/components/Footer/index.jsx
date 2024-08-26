import React from "react";
import facebookIcon from "../../assets/social/facebook.jpg";
import instagramIcon from "../../assets/social/instagram.jpg";
import twitterIcon from "../../assets/social/twitter.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://instagram.com">
        <img src={instagramIcon} alt="instagram" width="50" height="50" />
      </a>
      <a href="https://facebook.com">
        <img src={facebookIcon} alt="facebook" width="50" height="50" />
      </a>
      <a href="https://x.com">
        <img src={twitterIcon} alt="x" width="50" height="50" />
      </a>

      <p>Créateur d'Animatch Patrick Bodin</p>
      <p>Version 1.1 sous Réact </p>
      <Link to="/mentions-legales">Mentions Légales</Link>
      <p>RGPD</p>
      <p>Merci : Figma, Lococco.com, tristanremy.com</p>
      <p>Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
