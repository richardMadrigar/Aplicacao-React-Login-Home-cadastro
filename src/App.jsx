import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//switch evite que o react continua verificando as proximas rotas

import './App.css';

//imports components
import HomePage from './pages/homePage/HomePage'
import Cadastro from './pages/registerPage/RegisterPage'
import LoginPage from './pages/loginPage/LoginPage';
import Account from './pages/account/Account'

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/account" component={Account} />
      </Switch>
    </Router>

  );
}

export default App;
