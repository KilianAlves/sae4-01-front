import { useState } from "react";
import "./App.css";
import {Router, Route, useLocation} from "wouter";
import QuestionsList from "./components/QuestionsList";
import UserButton from "./components/userButton";
import QuestionEtReponses from "./components/QuestionEtReponses";
import QuestionForm from "./components/QuestionForm";
import ReponseForm from "./components/ReponseForm";
import { default as UserProvider } from "./contexts/user/Provider";
import Planning from "./components/RendezVous/Planning.jsx";
import Accueil from "./components/Accueil/Accueil.jsx";
import VeterinaireList from "./components/RendezVous/VeterinaireList.jsx";

import {Menubar} from "primereact/menubar";
import ProfilButton from "./components/profilButton.jsx";
import Profil from "./components/Profil/Profil.jsx";
import RdvButton from "./components/rdvButton";
import MyRdv from "./components/MyRdv/MyRdv.jsx";

function App() {
  const [location, setLocation] = useLocation();

  const items = [
    {
      label: 'Accueil',
      command: () => {
        setLocation('/')
      }
    },
    {
      label: 'Chercher RDV',
      command: () => {
        setLocation('/rendezvous')
      }
    },
    {
      label: 'Forum',
      command: () => {
        setLocation('/questions')
      }
    },
  ];

  const end = (
    <div className={"flex flex-row"}>
      <RdvButton />
      <ProfilButton/>
      <UserButton />
    </div>
  )
  return (
    <UserProvider>
      <div className="flex flex-column card-container green-container">
      <Menubar model={items} end={end}/>
      <Router>
        <Route path="/" component={Accueil} />
        <Route path="/questions" component={QuestionsList} />
        <Route path="/questions/:id" component={QuestionEtReponses} />
        <Route path="/create/question" component={QuestionForm} />
        <Route path="/create/reponse/:id" component={ReponseForm} />
        <Route path="/rendezvous" component={VeterinaireList} />
        <Route path="/rendezvous/:id" component={Planning} />
        <Route path="/profil" component={Profil} />
        <Route path="/myrdv" component={MyRdv} />
      </Router>
       </div>
    </UserProvider>
  );
}

export default App;
