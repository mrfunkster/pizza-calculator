import React from 'react'
import { Route, Switch, useLocation } from 'react-router'


import About from './About/About'
import Calculator from './Calculator/Calculator'
import Contacts from './Contacts/Contacts'
import WhatIsIt from './WhatIsIt/WhatIsIt'

import './MainContent.css'
import UnaviablePage from '../../../common/components/UnaviablePage/UnaviablePage'
import { AnimatePresence } from 'framer-motion'

const MainContent = () => {

    const routes = [
        { path: "/", name: "What is it?", Component: WhatIsIt },
        { path: "/calculate", name: "Calculate", Component: Calculator },
        { path: "/about", name: "About", Component: About },
        { path: "/contacts", name: "Contacts", Component: Contacts }
    ]

    const location = useLocation()

    return (
        <div className="col-sm-12 col-md-9 col-lg-9 main-content">
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    {
                        routes.map(({path, name, Component}) => (
                            <Route key={name} path={path} exact>
                                <Component />
                            </Route>
                        ))
                    }
                    <Route path='*' component={UnaviablePage}/>
                </Switch>
            </AnimatePresence>
        </div>
    )
}

export default MainContent