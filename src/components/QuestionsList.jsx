import React, {useState, useEffect, useCallback} from "react";
import { fetchAllQuestions } from "../services/api/api";
import QuestionItem from "./QuestionItem";
import Loading from "./Loading";

export default function QuestionsList() {

    const [questionsList, setQuestionsList] = useState(null);
    fetchAllQuestions().then((data) =>
        {
            //setBookmarksData(data["hydra:member"]);
            setQuestionsList(data["hydra:member"].map((question) =>
                <QuestionItem key={question.id} data={question}/>
            ));
        });


    //si pas de donnée ou chargement
    if (questionsList === null) {
        return <Loading/>;
    }

    return (
        <div>
            <h1>Liste de questions</h1>
            <div>{questionsList}</div>
        </div>
    );
}