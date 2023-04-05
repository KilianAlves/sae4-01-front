import React from "react";
import Jour from "./Jour.jsx";
import {getRdvSemaine} from "../../services/api/rendezvous.js";
import {useEffect, useState} from "react";
import Loading from "../Loading.jsx";

export default function Planning() {
    const [rdvList, setRdvList] = useState();

    useEffect(() => {
        getRdvSemaine().then((data) => {
            setRdvList(Object.entries(data).map(([key, creneaux]) => (
                <div key={key}>
                    <div>{ key }</div>
                    <Jour key={key} date={key} creneaux={Object.values(creneaux)}/>
                </div>
            )))
        });
    }, []);

    if (!rdvList) {
        return <Loading />;
    }
    return rdvList

}
