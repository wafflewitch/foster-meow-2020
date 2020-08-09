import React, { Fragment, useContext, useEffect } from 'react';
import Animals from '../animals/Animals';
import AnimalsAvailable from '../animals/AnimalsAvailable';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, user } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  const guestView = (
    <Fragment>
      <div>
        <AnimalsAvailable />
      </div>
    </Fragment>
  );

  const userView = (
    <Fragment>
      <div>
        <Animals />
      </div>
    </Fragment>
  );

  return <div>{isAuthenticated ? userView : guestView}</div>;
};

export default Home;
