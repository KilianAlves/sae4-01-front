import React from "react";
import {useEffect, useState} from "react";
import Loading from "../Loading.jsx";
import {getMyRdv} from "../../services/api/rendezvous.js";
import Jour from "../RendezVous/Jour.jsx";

export default function MyRdv() {
  const [rdvList, setRdvList] = useState();

  useEffect(() => {
    getMyRdv().then((data) => {
      setRdvList(Object.entries(data["hydra:member"]).map(([key, rdv]) => (
        <div key={key} className={"m-5"}>
          <div>{ rdv.veterinaire.nom } { rdv.veterinaire.prenom }</div>
          <div>{ (new Date(rdv.dateRdv)).toLocaleDateString("fr") } : { rdv.horaire }h</div>
        </div>
      )))
    });
  }, []);

  if (!rdvList) {
    return <Loading />;
  }
  return (<div>{rdvList}</div>)

}
