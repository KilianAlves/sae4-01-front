import React from "react";
import Jour from "./Jour.jsx";
import {getRdvSemaine} from "../../services/api/rendezvous.js";

export default async function Planning() {
    const listRdv = await getRdvSemaine();
    const rendu = listRdv.map((creneaux, key) =>
            <div>
                <div>{ key }</div>
                <Jour creneaux={creneaux}/>
            </div>
        )
    return (
        {rendu}
    )
}
