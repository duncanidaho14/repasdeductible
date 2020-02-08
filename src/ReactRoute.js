import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation,
  useHistory,
  useParams
} from 'react-router-dom';
import App from './components/app';
import Navbar from './components/header/navbar';
import About from './components/about';

function BlogPost() {
  let { slug } = useParams()
  let location = useLocation()
  let history = useHistory()
}

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        {/* No weird props here, just use
            regular `children` elements! */}
        <Route exact path="/">
            <App />
        </Route>
        <Route path="/home">
            <Navbar />
        </Route>
        <Route path="/about">
            <About />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('routing')
)

