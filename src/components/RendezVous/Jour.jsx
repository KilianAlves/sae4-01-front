import React from "react";
import {postRdv} from "../../services/api/rendezvous.js";

export default function Jour({creneaux, date, veterinaire}) {
  const rendu = creneaux.map((creneau) => (
    <button key={date+creneau} onClick={() => postRdv(date, creneau,veterinaire )}>{creneau}</button>
    //onClick="rdv('{{ key }}', {{ creneau }})"
  ))
  return <div>{rendu}</div>
}
