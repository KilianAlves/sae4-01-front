import React, {useRef} from "react";
import Jour from "./Jour.jsx";
import {getRdvSemaine, postRdv} from "../../services/api/rendezvous.js";
import {useEffect, useState} from "react";
import Loading from "../Loading.jsx";
import {useRoute} from "wouter";
import { Toast } from 'primereact/toast';
import {ConfirmDialog} from "primereact/confirmdialog";

export default function Planning() {
    const toast = useRef(null);
    const success = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmé', detail: 'Rendez-vous accepté', life: 3000 });
    }
    const [_, params] = useRoute("/rendezvous/:id");
    const { id } = params;
    const [rdvList, setRdvList] = useState();
    const [rdvChange, setRdvChange] = useState(0);
    const [dateRdv, setDateRdv] = useState(new Date())
    const createRDV = (date, creneau,veterinaire) => {
        postRdv(date, creneau,veterinaire).then((rdv) => {
            setRdvChange(rdvChange + 1);
            success();
        })
    }
    useEffect(() => {
        getRdvSemaine(dateRdv, id).then((data) => {
            setRdvList(Object.entries(data).map(([key, creneaux]) => (
                <div key={key}>
                    <div>{ key }</div>
                    <Jour key={key} date={key} veterinaire={id} creneaux={Object.values(creneaux)} createRDV={createRDV} />
                </div>
            )))
        });
    }, [rdvChange, dateRdv]);

    if (!rdvList) {
        return <Loading />;
    }
    return (
      <div className={"flex flex-column"}><Toast ref={toast} /><ConfirmDialog />
          <div className={"flex justify-content-between"}>
              <button onClick={() => {setDateRdv(new Date(dateRdv.getTime()-(7*24*60*60*1000)))}}><i className="pi pi-backward"></i></button>
              <button onClick={() => setDateRdv(new Date(dateRdv.getTime()+(7*24*60*60*1000)))}><i className="pi pi-forward"></i></button>
          </div>
          <div className={"flex"}>{rdvList}</div></div>
          )

}
