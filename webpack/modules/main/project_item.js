import React, { Component } from 'react'

class ProjectItem extends Component {

  constructor(props) {
    super(props)
    this.navigateProgrammatically = path =>
      this.context.router.transitionTo(path)
  }

  render() {
    const { image, name } = this.props;
    return (
      <div className="project-item centered"
        style={{
          background: `url(../../../images/${image})`,
          backgroundSize: 'cover',
          backgroundPosition: '50%'
        }}
        onClick={e => this.navigateProgrammatically(name.toLocalLowercase())}>
        <div className="text">
          {name}
        </div>
      </div>
    )
  }
}

export default ProjectItem
