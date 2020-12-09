import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'

import './About.css'
import ScrollToTopOnMount from '../../../../common/components/ScrollToTopOnMount'

const About = ({
    aboutPageTitle
}) => {
    return (
        <motion.div className="about-page"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, transition: 'ease-in-out' }}
        >
            <ScrollToTopOnMount />
            <h2>{aboutPageTitle}</h2>
            <h3>Section under construction...</h3>
        </motion.div>
    )
}

const mapDispatchToProps = state => ({
    aboutPageTitle: state.localization.main.mainContent.about.aboutPageTitle
})

About.propTypes = {
    aboutPageTitle: PropTypes.string
}

About.defaultProps = {
    aboutPageTitle: "Contacts Page Title..."
}

export default connect(
    mapDispatchToProps
)(About)