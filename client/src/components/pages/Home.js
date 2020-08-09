import React, { useContext, useEffect } from 'react';
import Animals from '../animals/Animals';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Animals />
    </div>
  );
};

export default Home;
