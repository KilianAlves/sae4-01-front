import React from "react";
import PropTypes from 'prop-types';

export default function QuestionItem({data}) {
    return (
        <div class="Question">
            <a href={data.id}>{data.titre}</a>
            <p>ecrite par {data.utilisateur.nom} {data.utilisateur.prenom} le {data.dateEcriture}</p>
        </div>
    );
}