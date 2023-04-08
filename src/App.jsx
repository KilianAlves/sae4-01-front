import { useState } from "react";
import "./App.css";
import { Router, Route } from "wouter";
import QuestionsList from "./components/QuestionsList";
import UserButton from "./components/UserButton";
import QuestionEtReponses from "./components/QuestionEtReponses";
import QuestionForm from "./components/QuestionForm";
import ReponseForm from "./components/ReponseForm";
import { default as UserProvider } from "./contexts/user/Provider";
import Planning from "./components/RendezVous/Planning.jsx";
import Accueil from "./components/Accueil/Accueil.jsx";
import VeterinaireList from "./components/RendezVous/VeterinaireList.jsx";
// theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

// core
import "primereact/resources/primereact.min.css";

// icons
import "primeicons/primeicons.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <UserButton />
      <Router>
        <Route path="/" component={Accueil} />
        <Route path="/questions/" component={QuestionsList} />
        <Route path="/questions/:id" component={QuestionEtReponses} />
        <Route path="/create/question" component={QuestionForm} />
        <Route path="/create/reponse/:id" component={ReponseForm} />
        <Route path="/rendezvous" component={VeterinaireList} />
        <Route path="/rendezvous/:id" component={Planning} />
      </Router>
    </UserProvider>
  );
}

export default App;
