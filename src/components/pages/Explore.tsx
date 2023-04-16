import ProjectCard from '../ProjectCard'
import { getProjects } from '../../api/api'

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
  return (
    <div style={styles.cards}>
      {getProjects().map(project => (
        <ProjectCard {...project} />
      ))}
    </div>
  )
}

export default Explore
