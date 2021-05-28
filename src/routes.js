import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Homepage } from './pages';

export default function Routes() {
    return (
      <Switch>
          <Route 
              exact path="/"
              render={() => {
                  return <Redirect to="/shop" />
              }}
          />
          <Route exact path="/shop" render={routeProps => {
              return <Homepage {...routeProps} />
          }} />
      </Switch>
    );
}
