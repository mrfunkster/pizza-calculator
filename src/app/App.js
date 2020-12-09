import React, { useEffect } from 'react'
import detectBrowserLanguage from 'detect-browser-language'
import { connect } from 'react-redux'

import '../common/style/reset.css'
import '../common/style/grid.css'
import '../common/style/style.css'
import '../common/style/colors.css'

import { switchToEN, switchToRU } from '../common/store/actions'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App = ({
    switchToEN,
    switchToRU
}) => {

    useEffect(() => {
        const languages = ['uk', 'ru', 'be', 'kk']
        const browserLanguage = detectBrowserLanguage().slice(0, 2).toLowerCase()
        console.log(`Detected browser language is "${detectBrowserLanguage()}"`)
        if(languages.includes(browserLanguage)) {
            switchToRU()
        } else {
            switchToEN()
        }
        window.addEventListener('resize', () => {
            let width = document.documentElement.clientWidth
            if(width >= 768 && document.body.classList.contains('lock')) {
                document.body.classList.remove('lock')
                console.log(width)
            }            
        })
    })

    return (
        <div className="app-body">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

const mapDispatchToProps = {
    switchToEN,
    switchToRU
}

export default connect(
    null,
    mapDispatchToProps
)(App);