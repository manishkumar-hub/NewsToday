import React, { Component } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import News  from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return <div>
      Hello react app 
      {/* <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News key="business" pageSize={15} country="in" category="business" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" pageSize={15} country="us" category="sports" />
          </Route>
          <Route exact path="/business">
            <News key="business" pageSize={15} country="in" category="Business" />
          </Route>
          <Route exact path="/health">
            <News key="health" pageSize={15} country="us" category="health" />
          </Route>
          <Route exact path="/science">
            <News key="science" pageSize={15} country="in" category="science" />
          </Route>
          <Route exact path="/technology">
            <News key="technology" pageSize={15} country="in" category="technology" />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" pageSize={15} country="us" category="entertainment" />
          </Route>
        </Switch>
      </Router> */}
    </div>;
  }
}

export default App;
