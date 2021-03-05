import React, {useState} from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import Particles from 'react-particles-js';
import {NavigationBar} from "./components/NavBar/NavigationBar";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import {HomeScreen} from "./screens/HomeScreen";
import {AuthScreen} from "./screens/AuthScreen";

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
  return (
    <div className="App">
      <Particles className='particles' params={particlesParam}/>
      <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/signin" />
            </Route>
            <Route path="/signin" component={AuthScreen}/>
            {
              true
              ?
              <>
              <Route path="/home" component={HomeScreen} />
              </>
              :
              <Redirect to="/signin" />
            }
          </Switch>
      </Router>
    </div>
  );
}

export default App;
