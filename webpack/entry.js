import React, { Component } from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import Main from './modules/main';
import Resume from './modules/resume/resume';
import About from './modules/about';
import ProjectPage from './modules/project_page';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app centered column">

          <div className="container">
            <header className="row-wrap">
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
                <NavLink className="nav-link" activeClassName="active" exact to="/">HOME</NavLink>
                {
                  // <NavLink className="nav-link" activeClassName="active" to="/about">ABOUT</NavLink>
                }
                <NavLink className="nav-link" activeClassName="active" to="/resume">RESUME</NavLink>
                <a className="nav-link" target="_blank"
                  href="https://github.com/tgrander">
                  MY CODE
                </a>
              </div>
            </header>
            <Route exact path="/" render={props => <Main {...props} />} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects/:project" component={ProjectPage} />
          </div>

          <footer className="centered">
            <div className="footer-links horizontal-list">
              <a href="https://www.linkedin.com/in/tgrander/" target="_blank">
                LINKED IN
              </a>
              <a href="https://twitter.com/treygrander?lang=en" target="_blank">
                TWITTER
              </a>
              <a href="https://github.com/tgrander" target="_blank">
                GITHUB
              </a>
              <a href="https://stackoverflow.com/users/6237741/trey-granderson?tab=profile" target="_blank">
                STACK OVERFLOW
              </a>
            </div>
          </footer>

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
