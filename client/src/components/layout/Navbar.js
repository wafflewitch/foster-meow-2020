import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logOut, user } = authContext;

  const onLogOut = () => {
    authContext.logOut();
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to='/'>My Fosters</Link>
      </li>
      <li>
        <Link to='/available'>Select New Foster</Link>
      </li>
      <li>
        <a href='#!' onClick={onLogOut}>
          <span className='hide-sm'>Log Out</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Log In</Link>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <div className='light-green lighten-1 nav-wrapper'>
        <a href='#' className='brand-logo'>
          {title} <i className='material-icons'>pets</i>
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Foster Meow',
};

export default Navbar;
