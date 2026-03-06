import './NavButton.css'

interface NavButtonInterface {
    buttonName: string,
    onClick: () => void
}

export const NavButton: React.FC<NavButtonInterface> = ({ buttonName, onClick }) => {
    return (
        <button className='navButton' onClick={onClick}>{buttonName}</button>
    )
}