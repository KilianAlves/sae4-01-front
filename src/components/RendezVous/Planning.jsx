import React from "react";
import Jour from "./Jour.jsx";
import {getRdvSemaine} from "../../services/api/rendezvous.js";
import {useEffect, useState} from "react";
import Loading from "../Loading.jsx";
import {useRoute} from "wouter";

export default function Planning() {
    const [_, params] = useRoute("/rendezvous/:id");
    const { id } = params;
    const [rdvList, setRdvList] = useState();

    useEffect(() => {
        getRdvSemaine("", id).then((data) => {
            setRdvList(Object.entries(data).map(([key, creneaux]) => (
                <div key={key}>
                    <div>{ key }</div>
                    <Jour key={key} date={key} veterinaire={id} creneaux={Object.values(creneaux)}/>
                </div>
            )))
        });
    }, []);

    if (!rdvList) {
        return <Loading />;
    }
    return rdvList

}
