import renderTagButton from './TagButton'
import { Project } from '../types/project'

const ProjectCard = ({ name, description, tags }: Project) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <footer>{tags.map(renderTagButton)}</footer> 
    </>
  )
}

export default ProjectCard
