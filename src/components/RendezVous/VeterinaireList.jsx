import React from "react";
import Jour from "./Jour.jsx";
import {getRdvSemaine} from "../../services/api/rendezvous.js";
import {useEffect, useState} from "react";
import Loading from "../Loading.jsx";
import {getAll} from "../../services/api/veterinaires.js";
import {Card} from "primereact/card";
import {useLocation} from "wouter";

export default function VeterinaireList() {
  const [veterinairesList, setVeterinairesList] = useState();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    getAll().then((data) => {
      setVeterinairesList(data["hydra:member"].map((veterinaire) => (
       <div key={veterinaire.id}>
         <Card title={(<a href={'/rendezvous/'+veterinaire.id}>  {veterinaire.nom + " " + veterinaire.prenom}</a>)} >
           <p>
             {veterinaire.ville}
           </p>
         </Card>
        </div>
      )))
    });
  }, []);

  if (!veterinairesList) {
    return <Loading />;
  }
  return <div>{veterinairesList}</div>

}
