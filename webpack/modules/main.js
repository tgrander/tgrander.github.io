import React from 'react';
import { Link } from 'react-router-dom';

import ProjectItem from './main/project_item';

function Main() {
  return (
    <div className="main-page column centered">

      <div className="greeting centered" style={{marginBottom: '0'}}>
        Trey is a Front End Developer with an affinity for collaborating with brilliant minds to build beautiful things.
      </div>

      <section className="highlighted-work">
        <ProjectItem
          image='2.jpg'
          name="Kynplex" />
        <ProjectItem
          image="hooked1.png"
          name="HOOKED" />
        <ProjectItem
          image="3.jpg"
          name="Zenmo" />
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

export default Main;
