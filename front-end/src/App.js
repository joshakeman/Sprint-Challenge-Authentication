import React from 'react';
import './App.css';

import { Route, NavLink } from 'react-router-dom'

import Login from './components/Login'
import Jokes from './components/Jokes'

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/jokes">Jokes</NavLink>

        <button>Log Out</button>
      </header>
      <div className="body">
        <Route path="/login" component={Login} />
        <Route path="/jokes" component={Jokes} />
      </div>
    </div>
  );
}

export default App;
