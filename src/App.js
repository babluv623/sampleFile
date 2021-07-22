import React from "react";
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import Error from "./Error";
import axios from "axios";
import { useEffect, useState } from "react";
// import Post from "./Post";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const api = axios.create({
  baseURL: `http://localhost:3200`,
});

export default function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(
    () => api.get("/recipes").then((response) => setRecipes(response.data)),
    []
  );
  return (
    <div className="container">
      <Router>
        <div className="header">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    className="link-item"
                    activeStyle={{ color: "aquamarine" }}
                    exact
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="link-item"
                    activeStyle={{ color: "aquamarine" }}
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="link-item"
                    activeStyle={{ color: "aquamarine" }}
                    to="/Posts"
                  >
                    Posts
                  </NavLink>
                </li>
                {/* <li>
              <NavLink
                className="link-item"
                activeStyle={{ color: "aquamarine" }}
                to="/Post"
              >
                Posts
              </NavLink>
            </li> */}
              </ul>
            </nav>
          </header>
        </div>
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Home recipes={recipes} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/Posts">
              <Posts />
            </Route>
            {/* <Route exact path="/Post">
            <Post />
          </Route> */}
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
