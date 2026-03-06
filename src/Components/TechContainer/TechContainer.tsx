import React from "react";
import { TechInterface } from "../../App";
import { TechCard } from "../TechCard/TechIcon";
import './TechContainer.css'

interface TechContainerInterface {
    cards: TechInterface[],
    title: string
}

const DISPLAY_NAME_MAP: Record<string, string> = {
  tailwindcss: 'Tailwind CSS',
  bootstrap: 'Bootstap',
  nodejs: 'NodeJS',
  materialui: 'Material UI',
  springboot: 'Spring Boot',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  sqlite: 'SQLite',
  redis: 'Redis',
  git: 'Git',
  flask: 'Flask',
  electron: 'Electron',
  react: 'React',
  java: 'Java',
  flutter: 'Flutter',
  python: 'Python',
  spring: 'Spring',
  figma: 'Figma'
};

export const TechContainer: React.FC<TechContainerInterface> = ({cards, title}) => {
    return (
        <div className='techSectionContainer'>
            <h3 className='techSectionTitle'>{title}</h3>
            <div className='iconsContainer'>
                {cards.map(tech => (
                    <TechCard logo={tech.url} name={DISPLAY_NAME_MAP[tech.url.split('/')[7]]}/>
                ))}
            </div>
        </div>
    );
}