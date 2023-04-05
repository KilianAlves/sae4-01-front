import React from "react";

export default function Jour({creneaux}) {
    const rendu = creneaux.map((creneau) =>
        <div>
            <button>{creneau}</button>
        </div>
        //onClick="rdv('{{ key }}', {{ creneau }})"
    )
    return (
        {rendu}
    )
}
