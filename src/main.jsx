import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'primeflex/primeflex.css';
// theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
// core
import "primereact/resources/primereact.min.css";
// icons
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
