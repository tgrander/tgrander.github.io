import React from 'react';

import { Link } from 'react-router-dom';

function Main2() {
  return (
    <div className="main-page column centered">

      <div className="greeting centered" style={{marginBottom: '0'}}>
        Trey is a Front End Developer with an affinity for collaborating with brilliant minds to build beautiful things.
      </div>

      <section className="highlighted-work">
        <div className="item centered" id="one">
          <div className="fade-in-text">
            Kynplex
          </div>
        </div>
        <div className="item centered" id="two">
          <div className="fade-in-text">
            HOOKED
          </div>
        </div>
        <div className="item centered" id="three">
          <div className="fade-in-text">
            Zenmo
          </div>
        </div>
      </section>

      <a className="pill">See More Work</a>

      <section className="about-me">

      </section>
      <section className="experience">

      </section>
      <section className="contact">

      </section>
    </div>
  )
}

export default Main2;
