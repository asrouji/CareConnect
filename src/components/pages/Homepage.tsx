import AddProjectButton from '../AddProjectButton'
import Explore from './Explore'
import { useNavigate } from 'react-router-dom'

const styles = {
  container: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '100vh',
  },

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

  footer: {
    display: 'flex',
    backgroundColor: 'lightblue',
    minHeight: '50px',
    fontFamily: 'Monaco',
    fontSize: '15px',
    justifyContent: 'center',
    paddingTop: '10px',
  },
}

const Homepage = () => {
  const navigate = useNavigate()

  return (
    <>
      <article style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>CareConnect</h1>
          <div style={styles.buttons}>
            <AddProjectButton />
            <h2 onClick={() => navigate('/ProfileView')}>Profile</h2> {/* TODO Add profile button */}
          </div>
        </header>
        <Explore />
        <footer style={styles.footer}>About the team</footer>
      </article>
    </>
  )
}

export default Homepage
