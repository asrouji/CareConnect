import { Project } from '../types/project'
import { Tag } from '../types/tag'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

/**
 * Gets all projects in the database. If tags are provided, only projects with those tags are returned.
 * @param limit the maximum number of projects to return
 * @param tags tags to include in the returned projects
 * @returns the projects in the database filtered by the given parameters
 */
export const getProjects = async (limit = 10, tags?: Tag[]): Promise<Project[]> => {
  const projects: Project[] = []
  const config = {
    method: 'post',
    url: 'https://us-west-2.aws.data.mongodb-api.com/app/data-ckdtn/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.API_KEY,
    },
    data: JSON.stringify({
      collection: 'projects',
      database: 'careConnect',
      dataSource: 'careConnect',
    }),
  }

  try {
    const response = await axios(config)
    const documents = response.data.documents
    documents.forEach((document: any) => {
      const project: Project = {
        id: document._id,
        name: document.name,
        description: document.description,
        creator: {
          id: document.creator,
          name: 'User',
          email: 'user@gmail.com',
          password: 'user123',
          tags: [],
          projects: [],
        },
        members: document.members.map((member: any) => {
          return {
            id: member,
            name: 'User',
            email: 'user@gmail.com',
            password: 'user123',
            tags: [],
            projects: [],
          }
        }),
        tags: document.tags,
      }
      projects.push(project)
    })
  } catch (error) {
    console.log(error)
  }

  return projects.filter(p => !tags || tags.some(t => p.tags.includes(t))).slice(0, limit)
}

/**
 * Gets a project by its id. If the project does not exist, undefined is returned.
 * @param id the id of the project to get
 * @returns the project with the given id, or undefined if it does not exist
 */
export const getProjectById = async (id: string): Promise<Project | undefined> => {
  let project: Project | undefined = undefined
  const config = {
    method: 'post',
    url: 'https://us-west-2.aws.data.mongodb-api.com/app/data-ckdtn/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.API_KEY,
    },
    data: JSON.stringify({
      collection: 'projects',
      database: 'careConnect',
      dataSource: 'careConnect',
      filter: {
        _id: id,
      },
    }),
  }

  try {
    const response = await axios(config)
    const document = response.data.document
    if (!document) {
      return undefined
    }
    project = {
      id: document._id,
      name: document.name,
      description: document.description,
      creator: {
        id: document.creator,
        name: 'User',
        email: 'user@gmail.com',
        password: 'user123',
        tags: [],
        projects: [],
      },
      tags: document.tags,
      members: document.members.map((member: any) => {
        return {
          id: member,
          name: 'User',
          email: 'user@gmail.com',
          password: 'user123',
          tags: [],
          projects: [],
        }
      }),
    }
  } catch (error) {
    console.log(error)
  }

  return project
}

/**
 * Creates a new project in the database.
 * @param project the project to create
 * @returns true if the project was created successfully, false otherwise
 */
export const createProject = async (project: Project): Promise<boolean> => {
  const config = {
    method: 'post',
    url: 'https://us-west-2.aws.data.mongodb-api.com/app/data-ckdtn/endpoint/data/v1/action/insertOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.API_KEY,
    },
    data: JSON.stringify({
      collection: 'projects',
      database: 'careConnect',
      dataSource: 'careConnect',
      document: {
        _id: project.id,
        name: project.name,
        description: project.description,
        creator: project.creator.id,
        members: project.members.map(member => member.id),
        tags: project.tags,
      },
    }),
  }

  try {
    await axios(config)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

/**
 * Updates a project in the database.
 * @param project the project to update
 * @returns true if the project was updated successfully, false otherwise
 */
export const updateProject = async (project: Project): Promise<boolean> => {
  const config = {
    method: 'post',
    url: 'https://us-west-2.aws.data.mongodb-api.com/app/data-ckdtn/endpoint/data/v1/action/updateOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.API_KEY,
    },
    data: JSON.stringify({
      collection: 'projects',
      database: 'careConnect',
      dataSource: 'careConnect',
      filter: {
        _id: project.id,
      },
      update: {
        $set: {
          name: project.name,
          description: project.description,
          creator: project.creator.id,
          members: project.members.map(member => member.id),
          tags: project.tags,
        },
      },
    }),
  }

  try {
    await axios(config)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

/**
 * Deletes a project from the database.
 * @param id the id of the project to delete
 * @returns true if the project was deleted successfully, false otherwise
 */
export const deleteProject = async (id: string): Promise<boolean> => {
  const config = {
    method: 'post',
    url: 'https://us-west-2.aws.data.mongodb-api.com/app/data-ckdtn/endpoint/data/v1/action/deleteOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.API_KEY,
    },
    data: JSON.stringify({
      collection: 'projects',
      database: 'careConnect',
      dataSource: 'careConnect',
      filter: {
        _id: id,
      },
    }),
  }

  try {
    await axios(config)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
