import ProjectCard from '../ProjectCard'
import { getProjects } from '../../api/api'

import { useEffect, useState } from 'react'
import { Project } from '../../types/project'

const styles = {
  cards: {
    display: 'flex',
    paddingInline: '30px',
    paddingTop: '20px',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    maxWidth: '100vw',
    flexFlow: 'row wrap',
    gap: '20px',
  },
}

const Explore = () => {
  const [data, setData] = useState<Project[] | null>(null)
  useEffect(() => {
    const inner = async () => {
      const projects = await getProjects()
      console.log('projects', projects)
      setData(projects)
    }
    inner()
  }, [])

  console.log('data', data)
  return (
    <div style={styles.cards}>
      {data?.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}

export default Explore
