import React, { useEffect, useState } from 'react';
import { getMe } from '../../services/api/bookmarks';

import { UserContext } from '.';

export default function Provider(props) {
  const [userData, setUserData] = useState(null);

  // eslint-disable-next-line react/prop-types
  const { children } = props;

  useEffect(() => {
    setUserData(undefined);
    getMe().then((data) => {
      setUserData(data);
    }).catch(() => {
      setUserData(null);
    });
  }, []);

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
}
