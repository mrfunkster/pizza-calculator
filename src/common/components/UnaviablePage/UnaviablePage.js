import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'

import './UnaviablePage.css'

const UnaviablePage = ({
    history,
    unavivablePageTitle,
    unavivablePageDescription1,
    unavivablePageDescription2,
    unavivablePageDescription3,
    unavivablePageDescription4,
    unavivablePageButton
}) => {
    return (
        <motion.div className="unaviable-page"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, transition: 'ease-in-out' }}   
        >
            <h2>{unavivablePageTitle}</h2>
            <h3>{unavivablePageDescription1} "<span className="gold-span">{document.location.host}/</span><span>{history.location.pathname.substr(1)}</span>" {unavivablePageDescription2} <br/>"<span>{unavivablePageDescription3}</span>"</h3>
            <h3>{unavivablePageDescription4}</h3>
            <div className="link-button">
                <div className="un-btn" onClick={() => history.push('/')}>{unavivablePageButton}</div>
            </div>
        </motion.div>
    )
}

const mapStateToProps = state => ({
    unavivablePageTitle: state.localization.common.unavivablePage.unavivablePageTitle,
    unavivablePageDescription1: state.localization.common.unavivablePage.unavivablePageDescription1,
    unavivablePageDescription2: state.localization.common.unavivablePage.unavivablePageDescription2,
    unavivablePageDescription3: state.localization.common.unavivablePage.unavivablePageDescription3,
    unavivablePageDescription4: state.localization.common.unavivablePage.unavivablePageDescription4,
    unavivablePageButton: state.localization.common.unavivablePage.unavivablePageButton,
})

UnaviablePage.propTypes = {
    unavivablePageTitle: PropTypes.string,
    unavivablePageDescription1: PropTypes.string,
    unavivablePageDescription2: PropTypes.string,
    unavivablePageDescription3: PropTypes.string,
    unavivablePageDescription4: PropTypes.string,
    unavivablePageButton: PropTypes.string,
}

UnaviablePage.defaultProps = {
    unavivablePageTitle: "Unaviable Page Title...",
    unavivablePageDescription1: "Unaviable page description content...",
    unavivablePageDescription2: "Unaviable page description content...",
    unavivablePageDescription3: "Unaviable page description content...",
    unavivablePageDescription4: "Unaviable page description content...",
    unavivablePageButton: "Button...",
}

export default connect(
    mapStateToProps
)(UnaviablePage)