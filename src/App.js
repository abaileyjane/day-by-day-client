import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {NavBarLoggedIn} from './components.page.js';
import './App.css';

ReactDOM.render(
  <NavBarLoggedIn firstName='Alanna' />,
  document.getElementById('root')
  );
export default App;
 