import './NavButton.css'

interface NavButtonInterface {
    buttonName: string,
    onClick: () => void,
    variant?: 'primary' | 'ghost'
}

export const NavButton: React.FC<NavButtonInterface> = ({ buttonName, onClick, variant = 'ghost' }) => {
    return (
        <button className={`navButton navButton--${variant}`} onClick={onClick}>
            {buttonName}
        </button>
    )
}
