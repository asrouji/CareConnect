import { Project } from './project'
import { Tag } from './tag'

export type User = {
  /** id of this user */
  id: string
  /** name of this user */
  name: string
  /** email of this user */
  email: string
  /** password of this user */
  password: string
  /** projects this user has joined */
  projects: Project[]
  /** tags this user has marked as preferences */
  tags: Tag[]
}
