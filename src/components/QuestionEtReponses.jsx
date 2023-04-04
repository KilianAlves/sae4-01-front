import React, { useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import Question from "./Question";
import ReponsesList from "./ReponsesList";
import "../App.css";

export default function QuestionEtReponses() {
  const [_, params] = useRoute("/questions/:id");
  const { id } = params;
  const [location, setLocation] = useLocation();

  return (
    <div>
      <Question id={id} />
      <ReponsesList questionId={id} />
    </div>
  );
}
