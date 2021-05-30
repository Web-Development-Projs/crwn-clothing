import React, { Component } from 'react';
import './App.styles.scss';
import Routes from './routes';
import { Header } from './components';
import { auth } from './firebase/firebase.utils';

export default class App extends Component {
  constructor() {
     super();

     this.state = {
        user: null,
     }
  }

  unsubscribe = null

  componentDidMount() {
      this.unsubscribe = auth.onAuthStateChanged(user => {
        this.setState({
          user
        });
     })
  }

  componentWillUnmount() {
      this.unsubscribe();
  }

  render() {
    return (
      <main className="App__container">
         <Header user={this.state.user} />
         <Routes />
      </main>
    );
  }
}
