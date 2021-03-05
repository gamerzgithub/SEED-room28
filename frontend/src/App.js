import React, {useState} from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import Particles from 'react-particles-js';
import {NavigationBar} from "./components/NavBar/NavigationBar";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import {HomeScreen} from "./screens/HomeScreen";
import {AuthScreen} from "./screens/AuthScreen";
import {OrderHistoryScreen} from "./screens/OrderHistoryScreen";
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
      <OrderHistoryScreen />
    </div>
  );
}

export default App;
