import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import './Calculator.css'
import CalculateInputSection from './CalculateInputSection'
import CalculationResult from './CalculationResult'


const Calculator = ({
    calculatePageTitle,
    isCalculated
}) => {
    const nodeRef = useRef(null)
    return (
        <motion.div className="calculator-page"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, transition: 'ease-in-out' }}
        >
            <h2>{calculatePageTitle}</h2>
            <SwitchTransition mode="out-in">
                <CSSTransition
                    timeout={300}
                    classNames="fade"
                    key={isCalculated}
                    nodeRef={nodeRef}
                >
                    <div className="switch-transition" ref={nodeRef}>
                        {
                            !isCalculated ? <CalculateInputSection /> : <CalculationResult />
                        } 
                    </div>
                </CSSTransition>
            </SwitchTransition>

        </motion.div>
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