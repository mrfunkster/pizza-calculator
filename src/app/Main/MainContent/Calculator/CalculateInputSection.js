import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import ScrollToTopOnMount from '../../../../common/components/ScrollToTopOnMount'
import { isFreshYeast, inputHandler, resetInputs, calculateInputs, radioToggle, calculateByFlour } from '../../../../common/store/actions'

class CalculateInputSection extends Component {

    nodeRef = createRef(null)

    changeInputHandler = e => {
        e.persist()
        this.props.inputHandler(
            e.target.name,
            e.target.value
        )
    }

    changeRadioHandler = e => {
        e.persist()
        this.props.radioToggle(e.target.value)
    }

    clearInput = e => {
        e.persist()
        this.props.inputHandler(
            e.target.name,
            ""
        )
    }

    checkInputsAndSubmit = () => {
        if (!this.props.ballWeight || !this.props.pizzaCount) {
            if(!this.props.ballWeight && !this.props.pizzaCount) {
                console.log("ENTER A VALUES")
            } else if(!this.props.ballWeight) {
                console.log("BALL WEIGHT EMPTY")
            } else if(!this.props.pizzaCount) {
                console.log("PIZZA COUNT EMPTY")
            }
        } else {
            if(this.props.calculateBy === 'ball') {
                this.props.calculateInputs()
            } else {
                this.props.calculateByFlour()
            }
            
        }
    }

    restoreOnBlur = e => {
        e.persist()
        const defaultValue = {
            ballWeight: 200,
            pizzaCount: 1,
            flourWeight: 200
        }
        let key = e.target.name
        if(!this.props[key]) {
            this.props.inputHandler(
                key, defaultValue[key]
            )
        }
    }

    render() { 
        const {
            calculateBy,
            isFresh,
            isFreshYeast,
            resetInputs,
            pizzaCount,
            ballWeight,
            flourWeight,

            pageTitle,
            radioTitle,
            radioContent1,
            radioContent2,
            inputDescription1,
            inputDescription2,
            inputDescription3,
            inputDescription4,
            fresh,
            dry,
            resetButton,
            submitButton
        } = this.props
        return (
            <>
                <ScrollToTopOnMount />
                <h3>{pageTitle}</h3>
                <div className="input-section">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h3>{radioTitle}</h3>
                        <div className="radio-section">
                            <div className="row radio-block">
                                <label className={calculateBy === "ball" ? "col-sm-12 col-md-6 col-lg-6 radio-label active" : "col-sm-12 col-md-6 col-lg-6 radio-label"}>
                                    <input type="radio"
                                        value={"ball"}
                                        checked={calculateBy === "ball"}
                                        onChange={this.changeRadioHandler}
                                    />
                                    {radioContent1}
                                    <span></span>
                                </label>
                                <label className={calculateBy === "flour" ? "col-sm-12 col-md-6 col-lg-6 radio-label active" : "col-sm-12 col-md-6 col-lg-6 radio-label"}>
                                    <input type="radio"
                                        value={"flour"}
                                        checked={calculateBy === "flour"}
                                        onChange={this.changeRadioHandler}
                                    />
                                    {radioContent2}
                                    <span></span>
                                </label>
                            </div>
                        </div>
                        <SwitchTransition mode="out-in">
                            <CSSTransition
                                classNames="fade"
                                timeout={300}
                                key={calculateBy==="ball"}
                                nodeRef={this.nodeRef}
                            >
                                <div className="user-inputs" ref={this.nodeRef}>
                                    {
                                        calculateBy === "ball" ? (
                                            <section>
                                                <div className="row individual-input">
                                                    <div className="col-sm-12 col-md-6 col-lg-6 input-name">
                                                        {inputDescription1}
                                                    </div>
                                                    <input className="col-sm-12 col-md-6 col-lg-6" type="number"
                                                        name="ballWeight"
                                                        value={ballWeight}
                                                        onChange={this.changeInputHandler}
                                                        onFocus={this.clearInput}
                                                        onBlur={this.restoreOnBlur}
                                                    />
                                                </div>
                                                <div className="row individual-input">
                                                    <div className="col-sm-12 col-md-6 col-lg-6 input-name">
                                                        {inputDescription2}
                                                    </div>
                                                    <input className="col-sm-12 col-md-6 col-lg-6" type="number" 
                                                        name="pizzaCount"
                                                        value={pizzaCount}
                                                        onChange={this.changeInputHandler}
                                                        onFocus={this.clearInput}
                                                        onBlur={this.restoreOnBlur}
                                                    />
                                                </div>
                                            </section>
                                        ) : (
                                            <section>
                                                <div className="row individual-input">
                                                    <div className="col-sm-12 col-md-6 col-lg-6 input-name">
                                                        {inputDescription3}
                                                    </div>
                                                    <input className="col-sm-12 col-md-6 col-lg-6" type="number"
                                                        name="flourWeight"
                                                        value={flourWeight}
                                                        onChange={this.changeInputHandler}
                                                        onFocus={this.clearInput}
                                                        onBlur={this.restoreOnBlur}
                                                    />
                                                </div>
                                            </section>
                                        )
                                    }
                                </div>
                            </CSSTransition>
                        </SwitchTransition>
                        <div className="row individual-input">
                            <div className="col-sm-12 col-md-6 col-lg-6 input-name">
                                {inputDescription4}
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 checkbox-input">
                                <input type="checkbox" className="switch__checkbox"
                                    checked={isFresh}
                                    onChange={e => isFreshYeast(e.target.checked)}
                                />
                                <div className="checkbox-description">{isFresh ? fresh : dry}</div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="button-container">
                    <div className="row button-section">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="link-button cancel">
                                <div className="un-btn"
                                    onClick={() => resetInputs()}
                                >{resetButton}</div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="link-button submit">
                                <div className="un-btn"
                                    onClick={() => this.checkInputsAndSubmit()}
                                >{submitButton}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

const mapDispatchToProps = {
    isFreshYeast,
    inputHandler,
    resetInputs,
    calculateInputs,
    calculateByFlour,
    radioToggle
}

const mapStateToProps = state => ({
    isFresh: state.calculationData.isFresh,
    pizzaCount: state.calculationData.pizzaCount,
    ballWeight: state.calculationData.ballWeight,
    calculateBy: state.calculationData.calculateBy,
    flourWeight: state.calculationData.flourWeight,

    pageTitle: state.localization.main.mainContent.calculate.calculateInputSection.pageTitle,
    radioTitle: state.localization.main.mainContent.calculate.calculateInputSection.radioTitle,
    radioContent1: state.localization.main.mainContent.calculate.calculateInputSection.radioContent1,
    radioContent2: state.localization.main.mainContent.calculate.calculateInputSection.radioContent2,
    inputDescription1: state.localization.main.mainContent.calculate.calculateInputSection.inputDescription1,
    inputDescription2: state.localization.main.mainContent.calculate.calculateInputSection.inputDescription2,
    inputDescription3: state.localization.main.mainContent.calculate.calculateInputSection.inputDescription3,
    inputDescription4: state.localization.main.mainContent.calculate.calculateInputSection.inputDescription4,
    fresh: state.localization.main.mainContent.calculate.calculateInputSection.fresh,
    dry: state.localization.main.mainContent.calculate.calculateInputSection.dry,
    resetButton: state.localization.main.mainContent.calculate.calculateInputSection.resetButton,
    submitButton: state.localization.main.mainContent.calculate.calculateInputSection.submitButton
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculateInputSection)