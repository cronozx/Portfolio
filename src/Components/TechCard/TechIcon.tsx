import React from "react";
import './TechIcon.css'

interface TechCardInterface {
    name: string,
    logo: string
}

export const TechCard: React.FC<TechCardInterface> = ({name, logo}) => {
    return (
        <div className="logoContainer">
            <img className="logo" src={logo} alt={name}/>
            <div className="overlay">
                <span className="logoName">{name}</span>
            </div>
        </div>
    )
}