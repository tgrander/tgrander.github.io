import React, { Component } from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Main from './modules/main';
import Main2 from './modules/main2';
import Resume from './modules/resume/resume';
import About from './modules/about';

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div className="container">
          <div className="header row-wrap">

            <div className="header-intro horizontal-list">
              <div id="avatar" className="round-photo"></div>
              <div id="name-and-title" className="column">
                <div className="name">
                  TREY GRANDERSON
                </div>
                <div className="title">
                  Front End Developer
                </div>
              </div>
            </div>

            <div id="nav-links" className="horizontal-list">
              <Link className="nav-link" to="/">RECENT WORK</Link>
              <Link className="nav-link" to="/about">ABOUT</Link>
              <Link className="nav-link" to="/resume">RESUME</Link>
              <Link className="nav-link" to="/contact">CONTACT</Link>
              <a className="nav-link" target="_blank"
                href="https://github.com/tgrander">
                MY CODE
              </a>
            </div>

          </div>

          <Route exact path="/" component={Main2} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

render(<App />, document.getElementById('root'));
