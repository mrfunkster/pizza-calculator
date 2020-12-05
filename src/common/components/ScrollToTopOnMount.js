import { useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'

const ScrollToTopOnMount = () => {
    useEffect(() => {
        // window.scrollTo(0, 0);
        scroll.scrollToTop();
    }, [])

    return null
}

export default ScrollToTopOnMount