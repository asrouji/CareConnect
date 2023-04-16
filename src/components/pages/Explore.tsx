import AddProjectButton from '../AddProjectButton'
import ProjectCard from '../ProjectCard'
import { getProjects } from '../../api/api'
import { useNavigate } from 'react-router-dom'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'lightblue',
    height: '100px',
    fontFamily: 'Monaco',
    fontSize: '25px',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '400px',
  },

  buttons: {
    display: 'flex',
    gap: '20px',
    paddingRight: '30px',
    paddingBottom: '30px',
    fontSize: '15px',
  },

  main: {
    display: 'grid',
    paddingInline: '30px',
    paddingTop: '20px',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}

const Explore = () => {
  const navigate = useNavigate()

  return (
    <>
      <article>
        <header style={styles.header}>
          <h1 style={styles.title}>CareConnect</h1>
          <div style={styles.buttons}>
            <AddProjectButton />
            <h2 onClick={() => navigate('/ProfileView')}>Profile</h2> {/* TODO Add profile button */}
          </div>
        </header>
        <main style={styles.main}>
          {getProjects().map(project => (
            <ProjectCard {...project} />
          ))}
        </main>{' '}
        {/* TODO Add project cards */}
        <footer></footer> {/* TODO Add project plus button*/}
      </article>
      {/* <ProjectCard name="Project Name" description="Project description" tags={['No Poverty']} /> */}
    </>
  )
}

export default Explore
