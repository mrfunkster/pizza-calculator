import React from 'react'
import { Route, Switch } from 'react-router'
import About from './About/About'
import Calculator from './Calculator/Calculator'
import Contacts from './Contacts/Contacts'

const MainContent = () => {
    return (
        <div className="col-sm-12 col-md-9 col-lg-9 main-content">
            <Switch>
                <Route path="/" exact
                    component={Calculator}
                />
                <Route path="/about"
                    component={About}
                />
                <Route path="/contacts"
                    component={Contacts}
                />
            </Switch>
        </div>
    )
}

export default MainContent