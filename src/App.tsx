import './App.css'
// import ProjectCard from './components/ProjectCard'
// import Explore from './components/pages/Explore'
import Homepage from './components/pages/Homepage'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import ProfileView from './components/pages/ProfileView'

import { User } from './types/user'

const fakeUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  password: 'johndoe123',
  projects: [],
  tags: ['Gender Equality', 'Affordable and Clean Energy', 'Peace, Justice and Strong Institutions'],
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="ProfileView" element={<ProfileView {...fakeUser} />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
