import { Project } from '../types/project'
import { Tag } from '../types/tag'
import sampleData from '../data/sampleData'

/**
 * Gets all projects in the database. If tags are provided, only projects with those tags are returned.
 * @param limit the maximum number of projects to return
 * @param tags tags to include in the returned projects
 * @returns the projects in the database filtered by the given parameters
 */
export const getProjects = (limit = 10, tags?: Tag[]): Project[] => {
  // TODO: Use a real database
  return sampleData.projects.slice(0, limit).filter(p => (tags ? tags.some(t => p.tags.includes(t)) : true))
}

/**
 * Gets a project by its id. If the project does not exist, undefined is returned.
 * @param id the id of the project to get
 * @returns the project with the given id, or undefined if it does not exist
 */
export const getProjectById = (id: string): Project | undefined => {
  // TODO: Use a real database
  return sampleData.projects.find(p => p.id === id)
}

/**
 * Creates a new project in the database. If the project already exists, it will be updated.
 * @param project the project to create or update
 */
export const createProject = (project: Project) => {
  // TODO: Use a real database
  const existingProject = sampleData.projects.find(p => p.id === project.id)
  if (existingProject) {
    Object.assign(existingProject, project)
  } else {
    sampleData.projects.push(project)
  }
}
