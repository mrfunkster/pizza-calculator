import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrollToTopOnMount from '../../../../common/components/ScrollToTopOnMount'
import { isFreshYeast, inputHandler, resetInputs, calculateInputs, radioToggle, calculateByFlour } from '../../../../common/store/actions'

class CalculateInputSection extends Component {

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
            flourWeight
        } = this.props
        return (
            <>
                <ScrollToTopOnMount />
                <h3>Let's calculate some ingridients!</h3>
                <div className="input-section">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h3>Choose correct answer:</h3>
                        <div className="radio-section">
                            <div className="row radio-block">
                                <label className={calculateBy === "ball" ? "col-sm-12 col-md-6 col-lg-6 radio-label active" : "col-sm-12 col-md-6 col-lg-6 radio-label"}>
                                    <input type="radio"
                                        value={"ball"}
                                        checked={calculateBy === "ball"}
                                        onChange={this.changeRadioHandler}
                                    />
                                I know weight off pizza dough
                                <span></span>
                                </label>
                                <label className={calculateBy === "flour" ? "col-sm-12 col-md-6 col-lg-6 radio-label active" : "col-sm-12 col-md-6 col-lg-6 radio-label"}>
                                    <input type="radio"
                                        value={"flour"}
                                        checked={calculateBy === "flour"}
                                        onChange={this.changeRadioHandler}
                                    />
                                    I know how many flour i want to use
                                    <span></span>
                                </label>
                            </div>
                        </div>       
                        {
                            calculateBy === "ball" ? (
                                <>
                                    <div className="row individual-input">
                                        <div className="col-sm-12 col-md-6 col-lg-6 input-name">
                                            Pizza-ball weight for 1 pizza(g):
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
                                            Count of pizza's:
                                        </div>
                                        <input className="col-sm-12 col-md-6 col-lg-6" type="number" 
                                            name="pizzaCount"
                                            value={pizzaCount}
                                            onChange={this.changeInputHandler}
                                            onFocus={this.clearInput}
                                            onBlur={this.restoreOnBlur}
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="row individual-input">
                                        <div className="col-sm-12 col-md-6 col-lg-6 input-name">
                                            Flour weight(g):
                                        </div>
                                        <input className="col-sm-12 col-md-6 col-lg-6" type="number"
                                            name="flourWeight"
                                            value={flourWeight}
                                            onChange={this.changeInputHandler}
                                            onFocus={this.clearInput}
                                            onBlur={this.restoreOnBlur}
                                        />
                                    </div>
                                </>
                            )
                        } 
                        <div className="row individual-input">
                            <div className="col-sm-12 col-md-6 col-lg-6 input-name">
                                Are you using fresh or dry yeast?
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 checkbox-input">
                                <input type="checkbox" className="switch__checkbox"
                                    checked={isFresh}
                                    onChange={e => isFreshYeast(e.target.checked)}
                                />
                                <div className="checkbox-description">{isFresh ? "Fresh" : "Dry"}</div>
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
                                >Reset to default</div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="link-button submit">
                                <div className="un-btn"
                                    onClick={() => this.checkInputsAndSubmit()}
                                >Calculate</div>
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
    flourWeight: state.calculationData.flourWeight
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculateInputSection)