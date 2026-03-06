export interface ProjectLink {
  name: string,
  function: () => void
}

export interface Project {
  name: string,
  stack: string[],
  description: string,
  links: ProjectLink[]
}