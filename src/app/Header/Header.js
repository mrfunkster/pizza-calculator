import React from 'react'

import './Header.css'
import LanguageSwitch from './LanguageSwitch/LanguageSwitch';
import ModeSwitch from './ModeSwitch/ModeSwitch'

const Header = () => {
    return (
        <header className="header">
            <div className="container overflow-hidden">
                <div className="row space-between v-centered header-bar">
                    <LanguageSwitch />
                    <div className="col-sm-12 col page-title"><span>🍕</span>Pizza Dough Calculator</div>
                    <ModeSwitch />
                </div>
            </div>
        </header>
    );
}

export default Header;