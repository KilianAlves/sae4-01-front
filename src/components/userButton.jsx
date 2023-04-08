import React, { useContext } from 'react';
import { UserContext } from '../contexts/user/index';
import { loginUrl, logoutUrl } from '../services/api/api';

export default function UserButton() {
    
    const userCtx = useContext(UserContext);

    const isLoggedOut = userCtx === null;
    const isLoggedIn = userCtx !== null && userCtx !== undefined;

    const processBtn = () => {
        if (isLoggedIn) {
          window.location = logoutUrl();
        }
        if (isLoggedOut) {
          window.location = loginUrl();
        }
      };

      return (<div>
        <button type="button" onClick={processBtn}>
          {isLoggedOut
            && (
            <span>
              Connexion
            </span>
            )}
          {isLoggedIn && (
            <span>Déconnexion</span>
          )}
        </button></div>
      );
}