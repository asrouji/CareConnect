import './App.css'
// import ProjectCard from './components/ProjectCard'
// import Explore from './components/pages/Explore'
import Homepage from './components/pages/Homepage'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import ProfileView from './components/pages/ProfileView'

import { User } from './types/user'
import AddProjectView from './components/pages/addProjectView'
import Explore from './components/pages/Explore'
import AboutProject from './components/pages/AboutProject'
import { useState } from 'react'

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
        <Route path="/" element={<Homepage />}>
          <Route path="ProfileView" element={<ProfileView {...fakeUser} />} />
          <Route path="addProjectView" element={<AddProjectView />} />
          <Route path="explore" element={<Explore />} />
          <Route path="aboutProject/:projectId" element={<AboutProject />} />
          <Route path="*" element={<Explore />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
