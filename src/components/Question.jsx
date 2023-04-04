import React, { useState, useEffect } from "react";
import { fetchQuestionById } from "../services/api/api";
import Loading from "./Loading";

export default function Question({ id }) {
  const [question, setQuestion] = useState(undefined);

  useEffect(() => {
    fetchQuestionById(id).then((data) => {
      setQuestion(data);
    });
  }, []);

  if (!question) {
    return <Loading />;
  }

  return (
    <div className="QuestionReponse">
      <h1>{question.titre}</h1>
      <p>{question.description}</p>
      <p>écrite le {question.dateEcriture}</p>
    </div>
  );
}
