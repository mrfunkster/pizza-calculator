import React from 'react'
import MainContent from './MainContent/MainContent'
import MainMenu from './MainMenu/MainMenu'

import './Main.css'

const Main = () => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <MainMenu />
                    <MainContent />
                </div>
            </div>
        </main>
    );
}

export default Main;