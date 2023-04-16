import { useParams } from 'react-router-dom'
import { getProjectById } from '../../api/api'
import renderTagButton from '../TagButton'

import { useState, useEffect } from 'react'
import { Project } from '../../types/project'

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    flexFlow: 'column',
    justifyContent: 'space-between',
  },

  name: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
}

const AboutProject = () => {
  const { projectId } = useParams()

  const [data, setData] = useState<Project | null>(null)
  useEffect(() => {
    const inner = async () => {
      if (!projectId) return null
      const project = (await getProjectById(projectId)) ?? null
      setData(project)
    }
    inner()
  }, [projectId])
  const { name, description, creator, members, tags } = data ?? {}
  return (
    <div style={styles.container}>
      <h1 style={styles.name}>{name}</h1>
      <p>
        <b>About the project:</b> {description}
      </p>
      <p>
        <b>Created by:</b> {creator?.name}
      </p>
      <p>
        <b>People involved:</b> {(members ?? []).map(e => e.name).join(', ')}
      </p>
      <p>{tags?.map(tag => renderTagButton(tag))}</p>
    </div>
  )
}

export default AboutProject
