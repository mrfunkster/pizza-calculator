import { Link, useLocation } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

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
            <Link 
                onClick={() => {
                    scroll.scrollToTop({
                        duration: 800
                    })
                    if(document.documentElement.clientWidth < 768) {
                        toggleMenuShow()
                    }
                }} to={link}
                >{name}
            </Link>
        </li>
    )
}

export default MainMenuItem