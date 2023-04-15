import { Tag } from '../types/tag'
import renderTagButton from './TagButton'

type ProjectCardProps = {
  name: string
  description: string
  tags?: Tag[]
}

const ProjectCard = ({ name, description, tags = [] as Tag[] }: ProjectCardProps) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <footer>{tags.map(renderTagButton)}</footer> 
    </>
  )
}

export default ProjectCard
