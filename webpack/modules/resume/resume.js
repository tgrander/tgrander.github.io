import React from 'react';
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div className="resume column" id="section-names">

      <section className="row-nowrap">
        <div className="section-name">TECHNICAL SKILLS</div>
        <div className="section-content column">
          Javascript, ES6, React, Redux, HTML5, CSS3, Node,
          MongoDB, GraphQL, Webpack, Apollo, Sass, HTTP
        </div>
      </section>

      <section className="row-nowrap">
        <div className="section-name">
          EXPERIENCE
        </div>
        <div className="section-content column">
          <div>
            <div>
              <span className="title">FRONT END DEVELOPER, </span>
              <span>Kynplex Inc</span>
            </div>

            <div className="dates">Oct 2016 - Present, Boston, MA</div>
            <div className="synopsis">
              Serve instrumental role transforming an early-stage beta product into a fully functional and highly interactive web app.
            </div>
            <ul>
              <li>
                Migrated front end  architecture from Meteor to a React, Redux and Webpack application.
              </li>
              <li>
                Lead engineering team to adopt React and Redux best practices which created cleaner code that was more modularized, reusable and easier to test.
              </li>
              <li>
                Designed a scalable Redux architecture to propagate state across hundreds of components.
              </li>
              <li>
                Created a style guide and front end framework using CSS3 and styled components that dramatically increased the speed of rapid prototyping mobile-first layouts.
              </li>
              <li>
                Managed and delivered several user-facing projects from start to finish; developed a real-time user notification system using MongoDB, GraphQL subscriptions and React.
              </li>
              <li>
                Utilized es6 to write performant React components and abstract all  logic into higher order containers.
              </li>
              <li>
                Improved front end performance with the use of code splitting, lazy loading and recompose to mitigate unnecessary React re-renders and reduce load times.
              </li>
            </ul>
          </div>
          <div>
            <div>
              <span className="title">FULL STACK DEVELOPER, </span>
              <span>JoMI</span>
            </div>
            <div className="dates">May 2017 - Present, Boston, MA</div>
            <div className="synopsis">
              Lead engineering team in using cutting edge full stack Javascript, such as es6 and es7 features, to write performant and scalable code on all layers of the stack.
            </div>
          </div>
        </div>
      </section>

      <section className="row-nowrap">
        <div className="section-name">SIDE PROJECTS</div>
        <div className="section-content column">
          <div>
            <div className="title">ZENMO</div>
            <div>
              <span>
                <Link to="" className="resume-link">
                  github.com/tgrander/zenmo-api
                </Link>
              </span>
              <span> | </span>
              <span>
                <Link to="" className="resume-link">
                  github.com/tgrander/zenmo-client
                </Link>
              </span>
            </div>
            <div>
              Personal finance progressive web app built with ReactJS; utilizes the Plaid API to access and visualize bank transactions in a meaningful way.
            </div>
          </div>
          <div>
            <div className="title">HOOKED</div>
            <div>
              <span>
                <Link to="" className="resume-link">
                  github.com/tgrander/hooked
                </Link>
              </span>
              <span> | </span>
              <span>
                <Link to="" className="resume-link">
                  hookedproject.herokuapp.com
                </Link>
              </span>
            </div>
            <div>
              Designed and developed a mobile-first Jekyll site made with HTML5 and CSS3 for a feature film supporting LGBTQ homeless youth.
            </div>
          </div>
        </div>
      </section>

      <section className="row-nowrap">
        <div className="section-name">EDUCATION</div>
        <div className="section-content column">
          <div>
            <span className="title">2016 - </span>
            <span>Software Engineering Immersive, Hack Reactor</span>
          </div>
          <div>
            <span className="title">2014 - </span>
            <span>B.A. in Accounting, University of Massachusetts at Amherst</span>
          </div>
        </div>
      </section>

      <section className="row-nowrap">
        <div className="section-name">COMMUNITY LEADERSHIP</div>
        <div className="section-content column">
          <div>
            <div>
              <span className="title">REACTJS BOSTON MEETUP</span>
              <span> — 2016 - Present, Co-Organizer</span>
            </div>
            <div className="synopsis">
              Work with a team of engineers to organize monthly React meetup with 200+ attendees.
            </div>
          </div>
          <div>
            <div>
              <span className="title">DRIODCON BOSTON</span>
              <span> — 2016 - Present, Volunteers Manager</span>
            </div>
            <div className="synopsis">
              Lead and manage a group of volunteers at the annual Driodcon Boston conference.
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Resume;
