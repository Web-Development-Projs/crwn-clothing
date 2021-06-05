import React, { Component } from 'react';
import './App.styles.scss';
import Routes from './routes';
import { Header } from './components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

export default class App extends Component {
  constructor() {
     super();

     this.state = {
        currentUser: null,
     }
  }

  unsubscribe = null

  componentDidMount() {
      // * listen to when users signs in or OUT*
      this.unsubscribe = auth.onAuthStateChanged(async (user) => {
         // * if user is registered in the app
         console.log(1);
         if(user) {
            const userRef = await createUserProfileDocument(user);

            // * listen to any changes to the data
            userRef.onSnapshot(snapshot => {
                this.setState({
                    currentUser: {
                       id: snapshot.id,
                       ...snapshot.data()
                    }
                });
            });
         }
         else { // * When user signs out
            this.setState({
               currentUser: null,
            });
         }
     });
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
