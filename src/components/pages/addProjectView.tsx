import renderTagButton from '../TagButton'
import { tags } from '../../data/tags'
import { Tag } from '../../types/tag'

const AddProjectView = () => {
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  return (
    <div className="addProjectView">
      <head>Add Project</head>
      <article>
        <header style={headerStyle}>
          <h1>Add Project</h1>
        </header>
        <main>
          <input type="text" name="projectName" placeholder="Project Name" />
          <input type="text" name="projectDescription" placeholder="Project Description" />
          {Object.keys(tags).map(key => {
            return renderTagButton(key as Tag)
          })}
        </main>
        <footer></footer>
      </article>
    </div>
  )
}

export default AddProjectView
