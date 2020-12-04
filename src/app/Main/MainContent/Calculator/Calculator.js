import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Calculator.css'

const Calculator = ({
    calculatePageTitle
}) => {
    return (
        <div className="calculator-page">
            <h2>{calculatePageTitle}</h2>
        </div>
    )
}

const mapDispatchToProps = state => ({
    calculatePageTitle: state.localization.main.mainContent.calculate.calculatePageTitle
})

Calculator.propTypes = {
    calculatePageTitle: PropTypes.string
}

Calculator.defaultProps = {
    calculatePageTitle: "Contacts Page Title..."
}

export default connect(
    mapDispatchToProps
)(Calculator)