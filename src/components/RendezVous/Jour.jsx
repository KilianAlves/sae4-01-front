import React from "react";
import {ConfirmDialog, confirmDialog} from "primereact/confirmdialog";

export default function Jour({creneaux, date, veterinaire, createRDV}) {
  const confirm = (creneau) => {
    confirmDialog({
      message: 'Vous êtes sur ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => createRDV(date, creneau, veterinaire),
    });
  };
  const rendu = creneaux.map((creneau) => (
    <button key={date+creneau} onClick={() => {confirm(creneau)}}>{creneau}</button>
    //onClick="rdv('{{ key }}', {{ creneau }})"
  ))
  return <div>{rendu}</div>
}
