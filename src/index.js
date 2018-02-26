import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {NavBarLoggedIn} from './components/navbar-logged-in.js';
import {NavBarLoggedOut} from './components/navbar-logged-out.js';
import {UserHomePage} from './components/userHomePage/userHomePage.js'
import './App.css';

ReactDOM.render(
  <UserHomePage />,
  
  document.getElementById('root')
  );
 
