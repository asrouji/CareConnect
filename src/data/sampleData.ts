import { User } from '../types/user'
import { Project } from '../types/project'

const sampleUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'johndoe123',
    projects: [],
    tags: ['Gender Equality', 'Affordable and Clean Energy', 'Peace, Justice and Strong Institutions'],
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'janedoe@yahoo.com',
    password: 'janedoe456',
    projects: [],
    tags: ['Peace, Justice and Strong Institutions', 'Good Health and Well-Being'],
  },
]

const sampleProjects: Project[] = [
  {
    id: '1',
    name: 'Project 1',
    description: 'This is project 1',
    creator: sampleUsers[0],
    members: [sampleUsers[0], sampleUsers[1]],
    tags: ['Affordable and Clean Energy', 'Peace, Justice and Strong Institutions', 'Life Below Water'],
  },
  {
    id: '2',
    name: 'Project 2',
    description: 'This is project 2',
    creator: sampleUsers[1],
    members: [sampleUsers[1]],
    tags: [
      'Good Health and Well-Being',
      'Sustainable Cities and Communities',
      'Partnerships for the Goals',
      'Affordable and Clean Energy',
    ],
  },
  {
    id: '3',
    name: 'Project 3',
    description: 'This is project 3',
    creator: sampleUsers[1],
    members: [sampleUsers[1]],
    tags: ['Gender Equality', 'Quality Education', 'Peace, Justice and Strong Institutions'],
  },
  {
    id: '4',
    name: 'Project 4',
    description: 'This is project 4',
    creator: sampleUsers[1],
    members: [sampleUsers[1]],
    tags: ['Climate Action', 'Industry, Innovation and Infrastructure'],
  },
]

sampleUsers.forEach(user => user.projects.push(sampleProjects[0]))

const sampleData = {
  users: sampleUsers,
  projects: sampleProjects,
}

export default sampleData
