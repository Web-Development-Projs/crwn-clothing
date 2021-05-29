import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Homepage, Shop } from './pages';

export default function Routes() {
    return (
      <Switch>
          <Route 
              exact path="/"
              render={() => {
                  return <Redirect to="/home" />
              }}
          />
          <Route path="/home" render={routeProps => {
              return <Homepage {...routeProps} />
          }} />
          <Route exact path="/shop" render={routeProps => {
              return <Shop {...routeProps} />
          }} />
      </Switch>
    );
}
