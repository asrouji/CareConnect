import { User } from '../../types/user'
import renderTagButton from '../TagButton'

const ProfileView = ({ name, email, projects, tags }: User) => {
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  return (
    <div className="profile">
      <head>Profile</head>
      <article>
        <header style={headerStyle}>
          <h1>Profile</h1>
        </header>
        <main>
          <div style={{ display: 'flex', flex: 1 }}>
            <div>
              <h2>{name}</h2>
            </div>
          </div>

          <div style={{ display: 'flex', flex: 1 }}>
            <div>
              <h2>Projects</h2>
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
            <h2>Tags</h2>
            {tags.map(tag => renderTagButton(tag))}
          </div>
        </main>
        <footer></footer>
      </article>
    </div>
  )
}

export default ProfileView
