import './IconButton.css'
import "bootstrap-icons/font/bootstrap-icons.css";

interface IconButtonInterface {
    iconName: string
    onClick: () => void
    label?: string
}

export const IconButton: React.FC<IconButtonInterface> = ({iconName, onClick, label}) => {
    return (
        <button className='iconbutton' onClick={onClick} aria-label={label ?? iconName}>
            <i className={`bi bi-${iconName}`} aria-hidden='true' />
        </button>
    )
}
