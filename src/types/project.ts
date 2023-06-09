import { Tag } from './tag'
import { User } from './user'

export type Project = {
  /** Project id */
  id: string
  /** Project name */
  name: string
  /** Project description */
  description: string
  /** The user that created the project */
  creator: User
  /** The users that are members of the project */
  members: User[]
  /** The tags that are associated with the project */
  tags: Tag[]
}
