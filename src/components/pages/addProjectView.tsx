import renderTagButton from '../TagButton'
import { tags } from '../../data/tags'
import { Tag } from '../../types/tag'

const AddProjectView = () => {
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '20px',
    fontSize: '25px',
  }

  const mainStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    paddingLeft: '20px',
  }

  return (
    <div className="addProjectView">
      <head>Add Project</head>
      <article>
        <header style={headerStyle}>
          <h1>Add Project</h1>
        </header>
        <main style={mainStyle}>
          <input type="text" name="projectName" placeholder="Project Name" />
          <input type="text" name="projectDescription" placeholder="Project Description" />
          <div>
            <p>Add tags:</p>
            {Object.keys(tags).map(key => {
              return renderTagButton(key as Tag)
            })}
          </div>
        </main>
        <footer></footer>
      </article>
    </div>
  )
}

export default AddProjectView
