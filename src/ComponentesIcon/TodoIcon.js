import { FaCheck } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import "./TodoIcon.css"

const iconTypes = {
    "check": (color) => <FaCheck className="Icon-react-icon" fill={color}/>,
    "delete": (color) => <GiCancel className="Icon-react-icon" fill={color}/>
}

function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
        {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }