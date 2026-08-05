import React from "react";
import './TechIcon.css'

interface TechCardInterface {
    name: string,
    logo: string
}

export const TechCard: React.FC<TechCardInterface> = ({name, logo}) => {
    return (
        <div className="techPill">
            <img className="techPill__logo" src={logo} alt="" loading="lazy" aria-hidden="true" />
            <span className="techPill__name">{name}</span>
        </div>
    )
}
