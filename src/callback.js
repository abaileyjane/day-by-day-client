import { Component } from 'react';
import { setIdToken, setAccessToken } from './auth';

export class Callback extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/homepage";
  }

  render() {
    return null;
  }
}