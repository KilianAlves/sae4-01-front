import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import QuestionsList from "./components/QuestionsList";
import QuestionItem from "./components/QuestionItem";
import QuestionEtReponses from "./components/QuestionEtReponses";
import { Router, Route } from "wouter";
import Planning from "./components/RendezVous/Planning.jsx";
import Accueil from "./components/Accueil/Accueil.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Route path="/" component={Accueil} />
      <Route path="/questions" component={QuestionsList} />
      <Route path="/questions/:id" component={QuestionEtReponses} />
      <Route path="/rendezvous" component={Planning} />
    </Router>
  );
}

export default App;
