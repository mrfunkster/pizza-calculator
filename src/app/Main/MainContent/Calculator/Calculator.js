import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Calculator.css'
import ScrollToTopOnMount from '../../../../common/components/ScrollToTopOnMount'
import CalculateInputSection from './CalculateInputSection'
import CalculationResult from './CalculationResult'

const Calculator = ({
    calculatePageTitle,
    isCalculated
}) => {
    return (
        <div className="calculator-page">
            <ScrollToTopOnMount />
            <h2>{calculatePageTitle}</h2>
            {
                !isCalculated ? <CalculateInputSection /> : <CalculationResult />
            }
            
        </div>
    )
}

const mapDispatchToProps = state => ({
    calculatePageTitle: state.localization.main.mainContent.calculate.calculatePageTitle,
    isCalculated: state.calculationData.isCalculated
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