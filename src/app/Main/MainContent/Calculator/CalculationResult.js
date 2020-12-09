import React from 'react'
import { connect } from 'react-redux'
import ScrollToTopOnMount from '../../../../common/components/ScrollToTopOnMount'

import { backToCalculationInputs } from '../../../../common/store/actions'

const CalculationResult = ({
    backToCalculationInputs,
    flourWeight,
    waterWeight,
    sugarWeight,
    saltWeight,
    yeastWeight,
    oliveOilWeight,
    isFresh,
    ballWeight,
    pizzaCount,

    pageTitle,
    mass,
    count,
    volume,
    resultDescription1,
    resultDescription2,
    resultDescription3,
    resultDescription4,
    resultDescription5,
    resultDescription6,
    resultDescription7,
    resultDescription8,
    backButton,
    fresh,
    dry
}) => {
    return (
        <>
            <ScrollToTopOnMount />
            <br/>
            <h3>{pageTitle}</h3>
            <div className="result-section">
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">{resultDescription1}</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{ballWeight} {mass}</div>
                </div>
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">{resultDescription2}</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{pizzaCount} {count}
                    </div>
                </div>
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">{resultDescription3}</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{flourWeight} {mass}</div>
                </div>
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">{resultDescription4}</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{waterWeight} {volume}</div>
                </div>
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">{resultDescription5}</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{oliveOilWeight} {mass}</div>
                </div>
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">{resultDescription6}</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{sugarWeight} {mass}</div>
                </div>
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">{resultDescription7}</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{saltWeight} {mass}</div>
                </div>
                <div className="row individual-result">
                    <div className="col-sm-6 col-md-6 col-lg-6 result-description">{resultDescription8} {isFresh ? `(${fresh})` : `(${dry})`}:</div>
                    <div className="col-sm-6 col-md-6 col-lg-6 result">{yeastWeight} {mass}</div>
                </div>
            </div>
            <div className="link-button submit">
                <div className="un-btn"
                    onClick={() => backToCalculationInputs()}
                >{backButton}</div>
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
    oliveOilWeight: state.calculationData.oliveOilWeight,
    ballWeight: state.calculationData.ballWeight,
    pizzaCount: state.calculationData.pizzaCount,

    pageTitle: state.localization.main.mainContent.calculate.calculationResult.pageTitle,
    mass: state.localization.main.mainContent.calculate.calculationResult.mass,
    count: state.localization.main.mainContent.calculate.calculationResult.count,
    volume: state.localization.main.mainContent.calculate.calculationResult.volume,
    resultDescription1: state.localization.main.mainContent.calculate.calculationResult.resultDescription1,
    resultDescription2: state.localization.main.mainContent.calculate.calculationResult.resultDescription2,
    resultDescription3: state.localization.main.mainContent.calculate.calculationResult.resultDescription3,
    resultDescription4: state.localization.main.mainContent.calculate.calculationResult.resultDescription4,
    resultDescription5: state.localization.main.mainContent.calculate.calculationResult.resultDescription5,
    resultDescription6: state.localization.main.mainContent.calculate.calculationResult.resultDescription6,
    resultDescription7: state.localization.main.mainContent.calculate.calculationResult.resultDescription7,
    resultDescription8: state.localization.main.mainContent.calculate.calculationResult.resultDescription8,
    backButton: state.localization.main.mainContent.calculate.calculationResult.backButton,
    fresh: state.localization.main.mainContent.calculate.calculateInputSection.fresh,
    dry: state.localization.main.mainContent.calculate.calculateInputSection.dry
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculationResult)