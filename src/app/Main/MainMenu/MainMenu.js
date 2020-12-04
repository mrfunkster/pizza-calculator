import React, { Component } from 'react'
import { connect } from 'react-redux'

import './MainMenu.css'
import MainMenuItem from './MainMenuItem'

import localization from '../../../common/localization/localization'

class MainMenu extends Component {

    state = {
        isMenuShow: false,
        isActive: {}
    }

    initMark = () => {
        let menuList = localization.en.main.mainMenu;
        let initArr = menuList.map(({id}, index) => (
            index === 0 ? {[id]: true} : {[id]: false}
        ))
        let isClickedObj = {}
        for (let i = 0; i < initArr.length; i++) {
            Object.assign(isClickedObj, initArr[i])
        }
        this.setState(prevState => ({
            ...prevState,
            isActive: isClickedObj
        }))
    }


    markActive = (id) => {
        let clickedObj  = this.state.isActive
        for (let key in clickedObj) {
            clickedObj[key] = false
        }
        clickedObj[id] = true;
        this.setState(prevState => ({
            ...prevState,
            isActive: clickedObj
        }))
        this.toggleMenuShow()
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

    componentDidMount() {
        this.initMark()
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
                                    id = {id}
                                    isActive = {this.state.isActive}
                                    markActive = {this.markActive}
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