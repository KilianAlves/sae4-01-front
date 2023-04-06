import React from "react";
import Jour from "./Jour.jsx";
import {getRdvSemaine} from "../../services/api/rendezvous.js";
import {useEffect, useState} from "react";
import Loading from "../Loading.jsx";
import {getAll} from "../../services/api/veterinaires.js";

export default function VeterinaireList() {
  const [veterinairesList, setVeterinairesList] = useState();

  useEffect(() => {
    getAll().then((data) => {
      setVeterinairesList(data["hydra:member"].map((veterinaire) => (
       <div><a href={'/rendezvous/'+veterinaire.id}> {veterinaire.nom} {veterinaire.prenom}</a></div>
      )))
    });
  }, []);

  if (!veterinairesList) {
    return <Loading />;
  }
  return <div>{veterinairesList}</div>

}
