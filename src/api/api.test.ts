import sampleData from '../data/sampleData'
import { getProjects, getProjectById, createProject } from './api'

describe('API Sample Data', () => {
  it('API works for sample data', async () => {
    expect(sampleData.projects).toStrictEqual(getProjects())
    expect(sampleData.projects[0]).toStrictEqual(getProjectById(sampleData.projects[0].id))

    const newProject = {
      id: '2',
      name: 'New Project',
      description: 'A new project',
      tags: [],
      members: [],
      creator: sampleData.users[0],
    }

    createProject(newProject)
    const projectList = getProjects()
    expect(projectList[1].name).toBe('New Project')

    const updatedProject = {
      ...newProject,
      name: 'Updated Project',
    }

    createProject(updatedProject)

    const updatedProjectList = getProjects()

    expect(updatedProjectList[1].name).toBe('Updated Project')
  })
})
