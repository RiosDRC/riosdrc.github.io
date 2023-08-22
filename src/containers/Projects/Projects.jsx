import React from 'react'
import "./Projects.css"
import { projects } from '../../constants/data'

const Projects = () => {
  return (
    <div className="app__projects" id='projects'>
        <h2>Projects</h2>
        <div className="app__projects-cardBox">
            {projects.map(project=>(
                <div className="app__projects-cardBox_card" key={project.id}>
                    <h1>{project.title}</h1>
                    <a href={project.url}>
                        <img src={project.img} alt="" />
                    </a>
                    <p>{project.desc}</p>
                    <a href={project.url}>
                        <button>Visit</button>
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects