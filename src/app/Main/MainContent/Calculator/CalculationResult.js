import React from 'react'
import { connect } from 'react-redux'

import { backToCalculationInputs } from '../../../../common/store/actions'

const CalculationResult = ({
    backToCalculationInputs,
    flourWeight,
    waterWeight,
    sugarWeight,
    saltWeight,
    yeastWeight,
    oliveOilWeight,
    isFresh
}) => {
    return (
        <>
            <br/>
            <h3>Calculation Result:</h3>
            <div className="result-section">
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">Flour:</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{flourWeight} g</div>
                </div>
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">Water:</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{waterWeight} ml</div>
                </div>
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">Olive Oil:</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{oliveOilWeight} g</div>
                </div>
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">Sugar Weight:</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{sugarWeight} g</div>
                </div>
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">Salt Weight:</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{saltWeight} g</div>
                </div>
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">Yeast {isFresh ? "(fresh)" : "(dry)"}:</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{yeastWeight} g</div>
                </div>
            </div>
            <div className="link-button submit">
                <div className="un-btn"
                    onClick={() => backToCalculationInputs()}
                >Try another reciept?</div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    backToCalculationInputs
}

const mapStateToProps = state => ({
    isFresh: state.calculationData.isFresh,
    flourWeight: state.calculationData.flourWeight,
    waterWeight: state.calculationData.waterWeight,
    sugarWeight: state.calculationData.sugarWeight,
    saltWeight: state.calculationData.saltWeight,
    yeastWeight: state.calculationData.yeastWeight,
    oliveOilWeight: state.calculationData.oliveOilWeight
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculationResult)