import React from "react";
import "./Styles.module.css"; // Assurez-vous que le fichier CSS est correctement lié

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://instagram.com">
        <img src="assets/social/instagram.jpg" alt="instagram" />
      </a>
      <a href="https://facebook.com">
        <img src="assets/social/facebook.jpg" alt="facebook" />
      </a>
      <a href="https://x.com">
        <img src="assets/social/twitter.jpg" alt="x" />
      </a>
      <p>Créateur d’Animatch Patrick Bodin</p>
      <p>Version 1.1 sous Réact Mentions</p>
      <p>légales RGPD Merci : Figma, Lococco.com, Fenod.fr</p>
      <p>Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
