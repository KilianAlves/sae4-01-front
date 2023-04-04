import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuestionsList from './components/QuestionsList'
import QuestionItem from './components/QuestionItem'
import QuestionEtReponses from './components/QuestionEtReponses'
import { Router, Route } from 'wouter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Route path="/questions/" component={QuestionsList} />
      <Route path="/questions/:id" component={QuestionEtReponses} />
    </Router>
  );
}

export default App
