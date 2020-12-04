import { Link, useLocation } from 'react-router-dom'

const MainMenuItem = ({
    name,
    link,
    toggleMenuShow
}) => {
    const location = useLocation().pathname;
    return (
        <li
            className={(location === link) ? "active" : ""}
        >
            <Link onClick={() => toggleMenuShow()} to={link}>{name}</Link>
        </li>
    )
}

export default MainMenuItem