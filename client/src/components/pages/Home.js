import React, { Fragment, useContext, useEffect } from 'react';
import Animals from '../animals/Animals';
import AnimalsAvailable from '../animals/AnimalsAvailable';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  const guestView = (
    <Fragment>
      <div className='splash container text-center'>
        <div className='text-primary lead'>
          <h1>Welcome to Foster Meow!</h1>
        </div>
        <div className='text-dark'>
          <p>We help YOU get into animal fostering!</p>
          <p>Register now to see animals in need and get started!</p>
          <p>Your local furry friends will thank you!</p>
        </div>
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
