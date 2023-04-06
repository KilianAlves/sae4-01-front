import React, { useContext, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import Question from "./Question";
import ReponsesList from "./ReponsesList";
import ReponseForm from "./ReponseForm";
import "../App.css";
import { UserContext } from '../contexts/user/index';

export default function QuestionEtReponses() {
  const [_, params] = useRoute("/questions/:id");
  const { id } = params;
  const [location, setLocation] = useLocation();

  const userCtx = useContext(UserContext);

  const questionClick = () => {
    // Rediriger vers la page question correspondante
    setLocation(`/create/reponse/${id}`);
  };

  return (
    <div>
      <Question id={id} />
      {userCtx ? <div onClick={questionClick}>Ajouter une reponse à la question  </div>: <div/>}
      <ReponsesList questionId={id} />
    </div>
  );
}
