import './ProjectCard.css'
import { ProjectLink } from './Projects'

interface ProjectCardInterface {
    projectName: string,
    projectStack: string[],
    projectDesc: string,
    projectLinks: ProjectLink[]
}

export const ProjectCard: React.FC<ProjectCardInterface> = ({projectName, projectDesc, projectStack, projectLinks}) => {
    return (
        <div className='cardContainer'>
            <span className='projectTitle'>{projectName}</span>
            <span className='projectStack'>Stack: {projectStack.join(', ')}</span>
            <span className='projectDesc'>{projectDesc}</span>
            <div className='linkWrapper'>
                {Array.from(projectLinks.entries()).map(([i, project]) => (
                    <a className='projectLink' onClick={project.function}>{project.name}</a>
                ))}
            </div>
        </div>
    )
}