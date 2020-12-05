import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import './ScrollToTop.css'

class ScrollToTop extends Component {

    state = {
        isShown: false
    }

    showScrollBtn = () => {
        const clientHeight = document.documentElement.clientHeight;
        window.addEventListener("scroll", () => {
            const scrolledPx = window.scrollY
            if(scrolledPx >= clientHeight/4) {
                this.setState({
                    isShown: true
                })
            } else {
                this.setState({
                    isShown: false
                })
            }
        })
    }

    componentDidMount() {
        this.showScrollBtn()
    }

    render() {
        return (
            <div className={this.state.isShown ? "scroll-btn show" : "scroll-btn"}
                onClick={() => scroll.scrollToTop()}
            >
                <div className="scroll-btn-arrow"></div>
            </div>
        )
    }
}

export default ScrollToTop