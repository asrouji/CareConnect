import { ProjectTag } from './projectTag'
import { User } from './user'

export type Project = {
  /** Project name */
  name: string
  /** Project description */
  description: string
  /** The user that created the project */
  creator: User
  /** The users that are members of the project */
  members: User[]
  /** The tags that are associated with the project */
  tags: ProjectTag[]
}
