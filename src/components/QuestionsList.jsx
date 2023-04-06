import React, { useContext, useState, useEffect } from "react";
import { fetchAllQuestions } from "../services/api/api";
import QuestionItem from "./QuestionItem";
import Loading from "./Loading";
import { useRoute, useLocation } from "wouter";
import { UserContext } from '../contexts/user/index';

export default function QuestionsList() {
  const [questionsList, setQuestionsList] = useState(null);
  const [location, setLocation] = useLocation();
  const userCtx = useContext(UserContext);

  const questionClick = () => {
    // Rediriger vers la page question correspondante
    setLocation(`/create/question`);
  };

  useEffect(() => {
    fetchAllQuestions().then((data) => {
      // setBookmarksData(data["hydra:member"]);
      setQuestionsList(
        data["hydra:member"].map((question) => (
          <QuestionItem key={question.id} data={question} />
        ))
      );
    });
  }, []);

  // si pas de donnée ou chargement
  if (questionsList === null) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Liste de questions</h1>
      {userCtx ? <div onClick={questionClick}>Poser une question</div>: <div/>}
      <div>{questionsList}</div>
    </div>
  );
}
