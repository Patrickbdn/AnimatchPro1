import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreationCompte = () => {
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
    const utilisateurExiste = utilisateurs.find(
      (utilisateur) => utilisateur.email === data.email
    );

    if (utilisateurExiste) {
      alert("L'utilisateur existe déjà");
      return;
    }

    utilisateurs.push(data);
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
    navigate("/connexion");
  };

  return (
    <div className="creation-de-compte">
      <h1>Création de compte</h1>
      <p>Bienvenue sur la page de création de compte</p>

      <form className="column-container" onSubmit={handleSubmit(onSubmit)}>
        <label>Nom</label>
        <input {...register("nom")}></input>
        <label>Prénom</label>
        <input {...register("prenom")}></input>
        <label>Email</label>
        <input {...register("email")}></input>
        <label>Mot de passe</label>
        <input type="password" {...register("motdepasse")}></input>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default CreationCompte;
