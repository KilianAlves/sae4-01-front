import React from "react";
import PropTypes from 'prop-types';
import { getUserInfo } from "../services/api/api";

export default function QuestionItem({data}) {
    
    let utilisateur = data.utilisateur;
    let infoUser = getUserInfo(data.utilisateur);

    return (
        <div class="Question">
            <a href={data.id}>{data.titre}</a>
            <p>ecrite par {infoUser.nom} {infoUser.prenom} le {data.dateEcriture}</p>
        </div>
    );
}