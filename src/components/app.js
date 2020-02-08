import React, { Component, Fragment } from 'react';
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation
} from "react-router-dom";
import ReactRoute from './../ReactRoute';
import Login from './administration/login';
import logg from './administration/logg';
import About from './about';
import Navbar from './header/navbar';
import Tic from './tic';

class App extends Component {
 
  render() {
    
    return (
      <Fragment>
          <Navbar />

        {/* <h1 className="title">{this.props.name}</h1> */}
      </Fragment>
    )
  }
  
}
  
export default App;