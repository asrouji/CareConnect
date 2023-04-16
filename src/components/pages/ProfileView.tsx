import { User } from '../../types/user'
import renderTagButton from '../TagButton'

const ProfileView = ({ name, email, projects, tags }: User) => {
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '20px',
    fontSize: '25px',
  }

  return (
    <div className="profile">
      <head>Profile</head>
      <article>
        <header style={headerStyle}>
          <h1>Profile</h1>
        </header>
        <main style={{ padding: '20px' }}>
          <div style={{ display: 'flex', flex: 1 }}>
            <div>
              <h2>Profile Name: {name}</h2>
            </div>
          </div>

          <div style={{ display: 'flex', flex: 1 }}>
            <div>
              <h2>Saved Projects</h2>
            </div>
          </div>

          <div>
            <ul>
              {projects.map(project => (
                <li key={project.id}>
                  <div style={{ display: 'flex', flex: 1 }}>
                    <h3>{project.name}</h3>
                  </div>
                </li>
              ))}
            </ul>{' '}
          </div>

          <div>
            <h2>Liked Tags</h2>
            {tags.map(tag => renderTagButton(tag))}
          </div>
        </main>
        <footer></footer>
      </article>
    </div>
  )
}

export default ProfileView
