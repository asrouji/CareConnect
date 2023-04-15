import { Project } from './project'
import { ProjectTag } from './tag'

export type User = {
  name: string
  email: string
  password: string
  projects: Project[]
  tags: ProjectTag[]
}
