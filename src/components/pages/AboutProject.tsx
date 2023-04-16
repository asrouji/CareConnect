import { useParams } from 'react-router-dom'
import { getProjectById } from '../../api/api'
import renderTagButton from '../TagButton'

const AboutProject = () => {
  const { projectId } = useParams()
  if (!projectId) return null
  const { name, description, creator, members, tags } = getProjectById(projectId) ?? {}
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{creator?.name}</p>
      <p>{(members ?? []).map(e => e.name).join(', ')}</p>
      <p>{tags?.map(tag => renderTagButton(tag))}</p>
    </div>
  )
}

export default AboutProject
