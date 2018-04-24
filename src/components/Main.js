import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Drivers from './Drivers';
import App from './App';
import Maps from './Maps';
import Messaging from './Messaging';
import Vehicles from './Vehicles';
import Statistics from './Statistics';


const Main = () => (
  <main>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/drivers" component={Drivers} />
      <Route path="/maps" component={Maps} />
      <Route path="/messaging" component={Messaging} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/vehicles" component={Vehicles} />
    </Switch>
  </main>
)

export default Main

