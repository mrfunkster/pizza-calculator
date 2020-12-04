import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './WhatIsIt.css'
import { Link } from 'react-router-dom'

const WhatIsIt = ({
    whatPageTitle,
    whatPageDescription
}) => {
    return (
        <div className="what-page">
            <div className="what-header-img">
                <img src="/images/pizza.png" alt="pizza"/>
            </div>
            <h2>{whatPageTitle}</h2>
            <h3>{whatPageDescription}</h3>
            <div className="what-header-img">
                <img src="/images/pizza2.png" alt="pizza"/>
            </div>
            <Link to="/calculate">Lets Go</Link>
        </div>
    )
}

const mapStateToProps = state => ({
    whatPageTitle: state.localization.main.mainContent.whatIsIt.whatPageTitle,
    whatPageDescription: state.localization.main.mainContent.whatIsIt.whatPageDescription
})

WhatIsIt.propTypes = {
    whatPageTitle:       PropTypes.string,
    whatPageDescription: PropTypes.string
}

WhatIsIt.defaultProps = {
    whatPageTitle: "Page Title...",
    whatPageDescription: "Page Description..."
}

export default connect(
    mapStateToProps
)(WhatIsIt)