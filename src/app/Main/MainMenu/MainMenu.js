import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './MainMenu.css'

class MainMenu extends Component {

    state = {
        isMenuShow: true
    }

    markActive = (e) => {
        let menuElements = document.querySelectorAll('li[menu]');
        menuElements.forEach(link => link.classList.remove('active'))
        e.target.parentElement.classList.add('active')
    }

    toggleMenuShow = () => {
        if (!this.state.isMenuShow) {
            document.addEventListener("click", this.handleOutsideClick, false);
          } else {
            document.removeEventListener("click", this.handleOutsideClick, false);
          }
        this.setState(prevState => ({
            isMenuShow: !prevState.isMenuShow
        }))
    }

    handleOutsideClick = e => {
        if(!this.node.contains(e.target)) {
            this.toggleMenuShow()
        }
    }

    render() {
        return (
            <>
                <div className={this.state.isMenuShow ? "main-overlay show" : "main-overlay"}></div>
                <div className={this.state.isMenuShow ? "col-sm-6 col-md-3 col-lg-3 main-menu show" : "col-sm-6 col-md-3 col-lg-3 main-menu"}
                    ref = {node => {this.node = node}}
                >
                    <div className="show-menu-btn"
                        onClick={this.toggleMenuShow}
                    ></div>
                    <ul className="menu-list">
                        <li menu="" className="active"><Link to="/" onClick={this.markActive}>Calculate</Link></li>
                        <li menu=""><Link to="/about" onClick={this.markActive}>About</Link></li>
                        <li menu=""><Link to="/contacts" onClick={this.markActive}>Contacts</Link></li>
                    </ul>
                </div>
            </>
        )
    }
}

export default MainMenu