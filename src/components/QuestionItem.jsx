import React from "react";
import { useLocation } from "wouter";

export default function QuestionItem({ data }) {
  // let utilisateur = data.utilisateur;
  // let infoUser = getUserInfo(data.utilisateur);
  const [location, setLocation] = useLocation();
  const questionClick = () => {
    // Rediriger vers la page question correspondante
    setLocation(`/questions/${data.id}`);
  };
  // par {infoUser.nom} {infoUser.prenom}
  return (
    <div className="Question" onClick={questionClick}>
      <div>{data.titre}</div>
      <p>écrite le {data.dateEcriture}</p>
    </div>
  );
}
