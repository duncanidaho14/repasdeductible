import React, {Component} from "react";
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

const Child = () => {
//   const location = useLocation();
//   const history = useHistory();
  const match = useRouteMatch("write-the-url-you-want-to-match-here");

  return (
    <div>Child</div>
  )
}

export default Child;