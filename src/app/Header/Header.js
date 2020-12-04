import React from 'react'

import './Header.css'
import LanguageSwitch from './LanguageSwitch/LanguageSwitch';
import ModeSwitch from './ModeSwitch/ModeSwitch'
import PageTitle from './PageTitle/PageTitle';

const Header = () => {
    return (
        <header className="header">
            <div className="container overflow-hidden">
                <div className="row space-between v-centered header-bar">
                    <LanguageSwitch />
                    <PageTitle />
                    <ModeSwitch />
                </div>
            </div>
        </header>
    );
}

export default Header;