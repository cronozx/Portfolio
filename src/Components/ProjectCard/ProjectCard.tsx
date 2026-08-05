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
        <article className='cardContainer'>
            <h3 className='projectTitle'>{projectName}</h3>
            <p className='projectDesc'>{projectDesc}</p>

            <ul className='projectStack' aria-label='Tech stack'>
                {projectStack.map((tech) => (
                    <li key={tech} className='stackChip'>{tech}</li>
                ))}
            </ul>

            <div className='linkWrapper'>
                {projectLinks.map((project) => (
                    <button key={project.name} className='projectLink' onClick={project.function}>
                        {project.name}
                        <i className='bi bi-arrow-up-right' aria-hidden='true'></i>
                    </button>
                ))}
            </div>
        </article>
    )
}
