import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import ScrollToTopOnMount from '../../../../common/components/ScrollToTopOnMount'

import './WhatIsIt.css'


const WhatIsIt = ({
    whatPageTitle,
    whatPageDescription,
    whatPageButton
}) => {
    return (
        <motion.div className="what-page"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, transition: 'linear' }}
        >
            <ScrollToTopOnMount />
            <div className="what-header-img">
                <img src="/images/pizza.webp" alt="pizza"/>
            </div>
            <h2>{whatPageTitle}</h2>
            <h3>{whatPageDescription}</h3>
            <div className="what-header-img">
                <img src="/images/pizza2.webp" alt="pizza"/>
            </div>
            <div className="link-button">
                <Link to="/calculate">{whatPageButton}</Link>
            </div> 
        </motion.div>
    )
}

const mapStateToProps = state => ({
    whatPageTitle: state.localization.main.mainContent.whatIsIt.whatPageTitle,
    whatPageDescription: state.localization.main.mainContent.whatIsIt.whatPageDescription,
    whatPageButton: state.localization.main.mainContent.whatIsIt.whatPageButton
})

WhatIsIt.propTypes = {
    whatPageTitle:       PropTypes.string,
    whatPageDescription: PropTypes.string,
    whatPageButton:      PropTypes.string
}

WhatIsIt.defaultProps = {
    whatPageTitle: "Page Title...",
    whatPageDescription: "Page Description...",
    whatPageButton: "Page Button..."
}

export default connect(
    mapStateToProps
)(WhatIsIt)