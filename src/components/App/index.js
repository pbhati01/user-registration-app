import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Header';
import Footer from '../Footer';
import RegistrationPage from '../RegistrationPage';
import * as constants from '../../utils/constants';

const App = () => {
  const isAuthenticated = 'valid';
  return (
    <div className='mainContainer'>
      <div className='backgroundContainer'></div>
      <Router>
        <Header isAuthenticated={isAuthenticated} />
        <Switch>
          {isAuthenticated === 'valid' ?
          <Route path={constants.REGISTRATION_PATH} render={props => <RegistrationPage {...props} />} />
          : null}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
