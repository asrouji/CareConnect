import '../css/addProjectButton.css'
import { useNavigate } from 'react-router-dom'

const AddProjectButton = () => {
  const navigate = useNavigate()
  return (
    <button className="add-project-button" onClick={() => navigate('/addProjectView')}>
      +
    </button>
  )
}

export default AddProjectButton
