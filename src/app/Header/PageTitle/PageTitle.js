import React from 'react'
import PropTypes from 'prop-types' 
import { connect } from 'react-redux'

import './PageTitle.css'
import { Link } from 'react-router-dom'

const PageTitle = ({
    mainPageTitle
}) => {
    return (
        <div className="col-sm-4 col page-title">
            <div className="page-title-mobile">
                <Link to="/">
                    <img src="/images/pizza-logo-s.webp" alt="" style={{ width: "40px" }}/>
                </Link>
            </div>
            <div className="page-title-main">
                <span>🍕</span>{mainPageTitle}<span className="reverse-span">🍕</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    mainPageTitle: state.localization.header.pageTitle.mainPageTitle
})

PageTitle.propTypes = {
    mainPageTitle: PropTypes.string
}

PageTitle.defaultProps = {
    mainPageTitle: "Main Page Title here..."
}

export default connect(
    mapStateToProps
)(PageTitle)