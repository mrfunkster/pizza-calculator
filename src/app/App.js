import React from 'react'

import '../common/style/reset.css'
import '../common/style/grid.css'
import '../common/style/style.css'
import '../common/style/colors.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App = () => {
    return (
        <div className="app-body">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;