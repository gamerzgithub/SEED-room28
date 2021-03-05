import React, {useState} from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import Particles from 'react-particles-js';
import {NavigationBar} from "./components/NavBar/NavigationBar";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import {HomeScreen} from "./screens/HomeScreen";
import {AuthScreen} from "./screens/AuthScreen";
import {BuyScreen} from "./screens/BuyScreen";
import {SellScreen} from "./screens/SellScreen";
import {OrderHistoryScreen} from "./screens/OrderHistoryScreen";
import {CurrentPricingScreen} from "./screens/CurrentPricingScreen";

import {store} from './index';

import {Posts} from './containers/Posts';

const particlesParam = {
	particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 800
      }
    }
	}
}

function App() {

  const token = store.getState().userReducer.accountKey;

  
  return (
    <div className="App">
      <Particles className='particles' params={particlesParam}/>
      <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/signin" />
            </Route>
            <Route path="/buy" component={BuyScreen}/>
            <Route path="/sell" component={SellScreen}/>
            <Route path="/signin" component={AuthScreen}/>
            <Route path="/home" component={HomeScreen} />
            <Route path="/orderhistory" component={OrderHistoryScreen} />
            <Route path="/currentpricing" component={CurrentPricingScreen} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
