import { User } from '../../types/user'

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
            <div>
              <button>Edit</button>
            </div>{' '}
            {/* make the button do anything */}
          </div>

          <div style={{ display: 'flex', flex: 1 }}>
            <div>
              <h2>Projects</h2>
            </div>
            <div>
              <button>Add</button>
            </div>{' '}
            {/* make the button do anything */}
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
            {/* TODO why angy? cos ur brackets weren't matched up*/}
          </div>

          {/* TODO a list of tags that are buttons  to remove from profile */}
          {/* TODO list user tags first, then a list of all tags that the user can add */}
          <div>
            <h2>Tags</h2>
            <ul>
              {tags.map(tag => (
                <li key={tag}>
                  {' '}
                  <button>{tag}</button>{' '}
                </li>
              ))}
            </ul>
          </div>
        </main>
        <footer></footer>
      </article>
    </div>
  )
}

export default ProfileView
