import React, { useContext, useEffect, useRef } from 'react';
import { postReponse } from '../services/api/api';
import { UserContext } from '../contexts/user/index';
import { useRoute, useLocation } from "wouter";

export default function ReponseForm() {

    const [_, params] = useRoute("/create/reponse/:id");
    const { id } = params;
    const userCtx = useContext(UserContext);

    const descriptionElmt = useRef();

    const handleSubmit = (event) => {
      console.log(descriptionElmt);
        event.preventDefault();
        let dateActuelle = new Date().toISOString().slice(0, 19).replace('T', ' ');
        postReponse({
            texte: descriptionElmt.current.value,
            ecriteDate: dateActuelle,
            question: `/api/questions/${id}`,
            utilisateur: `/api/utilisateurs/${userCtx.id}`,
          }).then((r) => console.log(r));
      };

      return (
        <div>
          <h1>Repondre à la question</h1>
          <form onSubmit={handleSubmit}>
            <textarea id="texte" name="texte" placeholder="Reponse" ref={descriptionElmt} />
            <button type="submit">Enregistrer</button>
          </form>
        </div>
      );
}