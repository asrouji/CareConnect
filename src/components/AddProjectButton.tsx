import '../css/addProjectButton.css'

const AddProjectButton = () => {
  const style = {
    border: '2px solid #73a2f5',
    backgroundColor: 'white',
    color: '#73a2f5',
    height: '25px',
    width: '25px',
    alignSelf: 'center',
    borderRadius: '20%',
  }
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
