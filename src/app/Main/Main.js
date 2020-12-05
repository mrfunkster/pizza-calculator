import React from 'react'
import MainContent from './MainContent/MainContent'
import MainMenu from './MainMenu/MainMenu'

import './Main.css'
import ScrollToTop from '../../common/components/ScrollToTop/ScrollToTop'

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <MainMenu />
                    <MainContent />
                </div>
            </div>
            <ScrollToTop />
        </main>
    );
}

export default Main;