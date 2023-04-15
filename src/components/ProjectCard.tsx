import renderTagButton from './TagButton'
import { Project } from '../types/project'

import '../css/projectCard.css'

const ProjectCard = ({ name, description, tags }: Project) => {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <footer>{tags.map(renderTagButton)}</footer> 
    </div>
  )
}

export default ProjectCard
