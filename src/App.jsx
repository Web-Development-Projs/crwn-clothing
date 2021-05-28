import React, { Component } from 'react';
import './App.styles.scss';
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <main className="App__container">
         <Routes />
      </main>
    );
  }
}
