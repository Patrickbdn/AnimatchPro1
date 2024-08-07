import React from "react";
import "./Header.css"; // Assurez-vous que le fichier CSS est correctement lié
import logo from "../assets/Logo.jpg";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
