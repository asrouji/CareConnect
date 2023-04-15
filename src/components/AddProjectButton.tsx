import '../css/addProjectButton.css'

const AddProjectButton = () => {
  return (
    <button className="add-project-button"
      onClick={() => {
        console.log('Add project button clicked')
      }}
    >
      +
    </button>
  )
}

export default AddProjectButton
