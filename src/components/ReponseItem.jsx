import React, { useState, useEffect } from "react";
import { fetchReponsesByQuestionId } from "../services/api/api";

export default function ReponseItem({ data }) {
  return (
    <div className="Reponse">
      <p>{data.texte}</p>
      <p>écrite le {data.ecriteDate}</p>
      {/* Si vous voulez afficher le nom et prénom de l'utilisateur qui a écrit la réponse, vous pouvez utiliser getUserInfo comme vous l'avez fait pour QuestionItem */}
    </div>
  );
}
