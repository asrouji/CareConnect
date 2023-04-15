import { tagColors } from '../data/tags'
import renderTagButton from './TagButton'

type Tag = keyof typeof tagColors

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
