import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Hello from './Hello';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/hello' component={Hello}/>
    </Switch>
  </main>
)

export default Main

