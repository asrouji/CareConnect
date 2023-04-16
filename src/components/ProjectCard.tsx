import renderTagButton from './TagButton'
import { Project } from '../types/project'
import { useNavigate } from 'react-router-dom'

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: '1px solid black',
    display: 'grid',
    justifyItems: 'center',
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '300px',
    borderRadius: '10px',
    boxShadow: ' 2px 2px 5px rgba(0, 0, 0, 0.3)',
    flexBasis: '30%',
  },

  tags: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    paddingBottom: '10px',
  },
}

const ProjectCard = ({ name, description, tags }: Project) => {
  const navigate = useNavigate()

  return (
    <div style={styles.card} onClick={() => navigate('./pages/AboutProject')}>
      <h3>{name}</h3>
      <p style={styles.description}>{description}</p>
      <footer style={styles.tags}>{tags.map(renderTagButton)}</footer>
    </div>
  )
}

export default ProjectCard
