import './IconButton.css'
import "bootstrap-icons/font/bootstrap-icons.css";

interface IconButtonInterface {
    iconName: string
    onClick: () => void
}

export const IconButton: React.FC<IconButtonInterface> = ({iconName, onClick}) => {
    return (
        <i className={`bi bi-${iconName} iconbutton`} onClick={onClick} color='purple'/>
    )
}