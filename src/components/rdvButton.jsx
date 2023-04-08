import React, { useContext } from 'react';
import { UserContext } from '../contexts/user/index';
import { loginUrl, logoutUrl } from '../services/api/api';
import { useLocation } from "wouter";

export default function RdvButton() {

  const userCtx = useContext(UserContext);
  const [location, setLocation] = useLocation();

  const isLoggedIn = userCtx !== null && userCtx !== undefined;

  const processBtn = () => {
    if (isLoggedIn) {
      setLocation("/myrdv");
    }

  };

  return (
    <div>
    {isLoggedIn
    &&
    <button type="button" onClick={processBtn}>
          <span>
              Mes rdv
            </span>
    </button>
    }
    </div>);
}