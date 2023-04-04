import React, { useState, useEffect } from "react";
import { fetchReponsesByQuestionId } from "../services/api/api";
import Loading from "./Loading";
import ReponseItem from "./ReponseItem";

export default function ReponsesList({ questionId }) {
  const [reponsesList, setReponsesList] = useState(null);

  useEffect(() => {
    fetchReponsesByQuestionId(questionId).then((data) => {
      setReponsesList(
        data["hydra:member"].map((reponse) => (
          <ReponseItem key={reponse.id} data={reponse} />
        ))
      );
    });
  }, [questionId]);

  if (reponsesList === null) {
    return <Loading />;
  }

  return <div>{reponsesList}</div>;
}
