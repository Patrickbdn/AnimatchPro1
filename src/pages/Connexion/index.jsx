import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const utilisateurs = JSON.parse(
      localStorage.getItem("utilisateurs") || "[]"
    );
    const utilisateur = utilisateurs.find(
      (u) => u.email === data.email && u.motdepasse === data.motdepasse
    );

    if (utilisateur) {
      localStorage.setItem("utilisateurActuel", JSON.stringify(utilisateur));
      // navigate('/tableau-de-bord');
    } else {
      alert("Identifiants invalides");
    }
  };

  return (
    <div className="connexion">
      <h1>Connexion</h1>
      <p>Bienvenue sur la page de Connexion</p>

      <form className="column-container" onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register("email")}></input>
        <label>Mot de passe</label>
        <input type="password" {...register("motdepasse")}></input>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Connexion;
