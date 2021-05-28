import React, { Component } from 'react';
import { Homepage } from './pages';
import './App.styles.scss';

export default class App extends Component {
  render() {
    return (
      <main className="App__container">
         <Homepage />
      </main>
    );
  }
}
