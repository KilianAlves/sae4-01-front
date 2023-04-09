import React from "react";
import {useEffect, useState} from "react";
import Loading from "../Loading.jsx";
import {Card} from "primereact/card";
import {getMe, getUserInfo} from "../../services/api/api.js";

export default function Profil() {
  const [me, setMe] = useState({});

  useEffect(() => {
    getMe().then((data) => {
      setMe(data)
    });
  }, []);


  return (
    <div>
      <Card title="Mes informations" >
        <p>Nom: {me.nom}</p>
        <p>Prénom: {me.prenom}</p>
        <p>Email: {me.email}</p>
        <p>CP: {me.CP}</p>
        <p>Adresse: {me.adresse}</p>
        <p>Civilité: {me.civilite}</p>
        <p>Adresse Complément: {me.complementAdresse}</p>
        <p>Téléphone: {me.tel}</p>
        <p>Ville: {me.ville}</p>
      </Card>
  </div>)

}
