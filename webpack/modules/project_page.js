import React from 'react';

function ProjectPage({
  photo,
  title,
  description,
  link
}) {
  return (
    <div>
      <div className="photo-header" style={{background: `url(${photo})`}}></div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  )
}

export default ProjectPage;
