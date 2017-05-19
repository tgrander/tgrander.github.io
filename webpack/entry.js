import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Resume from './modules/resume/resume';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
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
              <a className="nav-link" href="https://github.com/tgrander">
                MY CODE
              </a>
            </div>

          </div>

          <Route exact path="/" component={Content} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

const Content = () => (
  <div className="content">
      <div className="item centered" id="one">
        <div>
          Trey is a digital creator with a passion for the web and the front end.

          He uses Javascript and cutting-edge technologies to craft beautiful, performant and user-centric experiences in the browser.

          He envied the artist's ability to create, and so he became an engineer.
        </div>
      </div>
      <div className="item" id="two">

      </div>
      <div className="item" id="three">

      </div>
      <div className="item" id="four">

      </div>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

render(<App />, document.getElementById('root'));
