import React, {useState} from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import Particles from 'react-particles-js';
import {NavigationBar} from "./components/NavBar/NavigationBar";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import {HomeScreen} from "./screens/HomeScreen";
import {AuthScreen} from "./screens/AuthScreen";
import {BuyScreen} from "./screens/BuyScreen";
import {store} from './index';

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
              <Redirect to="/buy" />
            </Route>
            <Route path="/buy" component={BuyScreen}/>
            <Route path="/signin" component={AuthScreen}/>
            {/* {
              token

              ?
              <>
              <Route path="/home" component={HomeScreen} />
              </>
              :
              <Redirect to="/home" />
            } */}
            <Route path="/home" component={HomeScreen} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
