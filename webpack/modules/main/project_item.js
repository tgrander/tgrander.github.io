import React, { Component } from 'react'

class ProjectItem extends Component {

  constructor(props) {
    super(props)
    this.clickHandler = path =>
      this.props.history.push(
        `/projects/${this.props.name.toLocaleLowerCase()}`
      )
  }

  render() {
    const { image, name, path } = this.props;
    return (
      <a className="project-item centered" href={path} target="_blank"
        style={{
          background: `url(../../../images/${image})`,
          backgroundSize: 'cover',
          backgroundPosition: '50%'
        }}>
        <div className="text">
          {name}
        </div>
      </a>
    )
  }
}

export default ProjectItem
