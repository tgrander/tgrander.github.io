import React, { Component } from 'react'

function ProjectItem({ image, name, path, textColor, history }) {

  const clickHandler = () =>
    history.push(`/projects/${this.props.name.toLocaleLowerCase()}`)

  return (
    <a className="project-item centered" href={path} target="_blank"
      style={{
        background: `url(../../../images/${image})`,
        backgroundSize: 'cover',
        backgroundPosition: '50%'
      }}>
      <div className="text" style={textColor && {color: textColor}}>
        {name}
      </div>
    </a>
  )
}

export default ProjectItem
