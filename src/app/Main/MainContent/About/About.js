import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './About.css'
import ScrollToTopOnMount from '../../../../common/components/ScrollToTopOnMount'

const About = ({
    aboutPageTitle
}) => {
    return (
        <div className="about-page">
            <ScrollToTopOnMount />
            <h2>{aboutPageTitle}</h2>
            <h3>Section under construction...</h3>
        </div>
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