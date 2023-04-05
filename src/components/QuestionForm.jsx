import React, { useContext, useEffect, useRef } from 'react';
import { postQuestion } from '../services/api/api';
import { UserContext } from '../contexts/user/index';

export default function QuestionForm() {

    const userCtx = useContext(UserContext);

    const nameElmt = useRef();
    const descriptionElmt = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        let dateActuelle = new Date().toISOString().slice(0, 19).replace('T', ' ');
        postQuestion({
            titre: nameElmt.current.value,
            description: descriptionElmt.current.value,
            dateEcriture: dateActuelle,
            utilisateur: `/api/utilisateurs/${userCtx.id}`,
          }).then((r) => console.log(r));
      };

      return (
        <div>
          <h1>Poser une question</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" id="titre" name="titre" placeholder="titre" ref={nameElmt} />
            <textarea id="description" name="description" placeholder="Description" ref={descriptionElmt} />
            <button type="submit">Enregistrer</button>
          </form>
        </div>
      );
}