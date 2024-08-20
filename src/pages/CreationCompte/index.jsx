import React from "react";
import CreationCompte from CreationCompte

const CreationCompte = () => {
  return (
    <div className="creation-de-compte">
      <H1>Connexion / Création de compte</H1>
      <p>Bienvenue sur la page de connexion/création de compte</p>
      <input type="email" placeholder="Votre email" />
      <input type="password" placeholder="Votre mot de passe" />
      <form>
        className="column-container" onSubmit={handleSubmit(onSubmit)}>
        <label>Nom</label>
        <input {...register("Nom")}></input>
        <label>Prénom</label>
        <input {...register("Prénom")}></input>
        <label>Email</label>
        <input {...register("Email")}></input>
        <label>Mot de passe</label>
        <input type="password" {...register("mot de passe")}></input>
      </form>
    </div>
  );
};

export default CreationCompte;
