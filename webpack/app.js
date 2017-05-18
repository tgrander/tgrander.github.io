import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        This will never change
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Topics</Link></li>
        </ul>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
      </div>
    </Router>
  )
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Resume = () => (
  <div>
    <h2>Resume</h2>
  </div>
)

render(<App />, document.getElementById('root'));
