import { Project } from '../types/project'
import { Tag } from '../types/tag'
import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb+srv://asrouji:RmxXXLPkpkighAqv@careconnect.lwgoj7d.mongodb.net/test')

/**
 * Gets all projects in the database. If tags are provided, only projects with those tags are returned.
 * @param limit the maximum number of projects to return
 * @param tags tags to include in the returned projects
 * @returns the projects in the database filtered by the given parameters
 */
export const getProjects = async (limit = 10, tags?: Tag[]): Promise<Project[]> => {
  let projects: Project[] = []
  try {
    await client.connect()
    const database = client.db('careConnect')
    const collection = database.collection('projects')
    const query = tags ? { tags: { $in: tags } } : {}
    const cursor = collection.find(query).limit(limit)
    const results = await cursor.toArray()
    projects = results.map(p => ({
      id: p._id.toString(),
      name: p.name,
      description: p.description,
      tags: p.tags as Tag[],
      creator: {
        id: p.creator,
        name: 'Placeholder',
        email: 'Placeholder',
        password: 'Placeholder',
        projects: [],
        tags: [],
      },
      members: p.members.map((id: string) => ({
        id,
        name: 'Placeholder',
        email: 'Placeholder',
        password: 'Placeholder',
        projects: [],
        tags: [],
      })),
    }))
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
  return projects
}

/**
 * Gets a project by its id. If the project does not exist, undefined is returned.
 * @param id the id of the project to get
 * @returns the project with the given id, or undefined if it does not exist
 */
export const getProjectById = async (id: string): Promise<Project | undefined> => {
  let project: Project | undefined
  try {
    await client.connect()
    const database = client.db('careConnect')
    const collection = database.collection('projects')
    const result = await collection.findOne({ _id: new ObjectId(id) })
    if (result) {
      project = {
        id: result._id.toString(),
        name: result.name,
        description: result.description,
        tags: result.tags as Tag[],
        creator: {
          id: result.creator,
          name: 'Placeholder',
          email: 'Placeholder',
          password: 'Placeholder',
          projects: [],
          tags: [],
        },
        members: result.members.map((id: string) => ({
          id,
          name: 'Placeholder',
          email: 'Placeholder',
          password: 'Placeholder',
          projects: [],
          tags: [],
        })),
      }
    }
  } catch (e) {
    console.error(e)
  }
  return project
}

/**
 * Creates a new project in the database. If the project already exists, it will be updated.
 * @param project the project to create or update
 * @returns true if the project was created or updated successfully, false otherwise
 */
export const createProject = async (project: Project): Promise<boolean> => {
  let success = false
  try {
    await client.connect()
    const database = client.db('careConnect')
    const collection = database.collection('projects')
    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(project.id) },
      {
        $set: {
          name: project.name,
          description: project.description,
          tags: project.tags,
          creator: project.creator.id,
          members: project.members.map(m => m.id),
        },
      },
      { upsert: true }
    )
    success = result.ok === 1
  } catch (e) {
    console.error(e)
  }
  return success
}

const api = { getProjects, getProjectById, createProject }
export default api
