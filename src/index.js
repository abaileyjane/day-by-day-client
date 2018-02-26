import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {NavBarLoggedIn} from './components/navbar-logged-in.js';
import {NavBarLoggedOut} from './components/navbar-logged-out.js';
import {Page} from './components/page.js'
import './App.css';

ReactDOM.render(
  <Page />,
  
  document.getElementById('root')
  );
 
