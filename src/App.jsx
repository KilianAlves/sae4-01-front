import { useState } from "react";
import "./App.css";
import QuestionsList from "./components/QuestionsList";
import UserButton from "./components/UserButton";
import QuestionEtReponses from "./components/QuestionEtReponses";
import { Router, Route } from "wouter";
import { default as UserProvider } from './contexts/user/Provider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <UserButton/>
      <Router>
        <Route path="/questions/" component={QuestionsList} />
        <Route path="/questions/:id" component={QuestionEtReponses} />
      </Router>
    </UserProvider>
  );
}

export default App;
