import { Component } from 'react';
import { setIdToken, setAccessToken } from './auth';

export class Callback extends Component {


  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/homepage";
  }

  render() {
    return null;
  }
}