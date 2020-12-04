import React, { Component } from 'react'
import { connect } from 'react-redux'

import './MainMenu.css'
import MainMenuItem from './MainMenuItem'

class MainMenu extends Component {

    state = {
        isMenuShow: false,
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
        const {
            mainMenu,
        } = this.props;
        return (
            <>
                <div className={this.state.isMenuShow ? "main-overlay show" : "main-overlay"}></div>
                <div className={this.state.isMenuShow ? "col-sm-6 col-md-3 col-lg-3 main-menu show" : "col-sm-6 col-md-3 col-lg-3 main-menu"}
                    ref = {node => {this.node = node}}
                >
                    <div className="show-menu-btn"
                        onClick={() => this.toggleMenuShow()}
                    >
                        <div className="show-menu-arrow"></div>
                    </div>
                    <ul className="menu-list">
                        {
                            mainMenu.map(({
                                name,
                                link,
                                id
                            }) => (
                                <MainMenuItem key={id}
                                    name = {name}
                                    link = {link}
                                    toggleMenuShow = {this.toggleMenuShow}
                                />
                            ))
                        }
                    </ul>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    mainMenu: state.localization.main.mainMenu,
})

export default connect(
    mapStateToProps
)(MainMenu)