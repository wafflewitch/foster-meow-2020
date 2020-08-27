import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';

// Components
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/pages/Home';
import AnimalsAvailable from './components/animals/AnimalsAvailable';
import AnimalForm from './components/animals/AnimalForm';

// States
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import AnimalState from './context/animal/AnimalState';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // useEffect(() => {
  //   // Init Materialilze JS
  //   M.AutoInit();
  // });

  return (
    <AuthState>
      <AlertState>
        <AnimalState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/available' component={AnimalsAvailable} />
                  <Route exact path='/add-animal' component={AnimalForm} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AnimalState>
      </AlertState>
    </AuthState>
  );
};

export default App;
