import renderTagButton from './TagButton'
import { Project } from '../types/project'

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: '1px solid black',
    display: 'grid',
    justifyItems: 'center',
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '300px',
    borderRadius: '10px',
    boxShadow:' 2px 2px 5px rgba(0, 0, 0, 0.3)',
  },
  
  tags: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
  }
}

const ProjectCard = ({ name, description, tags }: Project) => {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p style={styles.description}>{description}</p>
      <footer style={styles.tags}>{tags.map(renderTagButton)}</footer>
    </div>
  )
}

export default ProjectCard
